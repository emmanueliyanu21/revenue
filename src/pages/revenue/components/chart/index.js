import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import Util from "../../../../commons/helpers/utils";

const Chart = () => {
  const { transactions } = useSelector((state) => state.transactions);

  const dateAmountObject = {};
  transactions.forEach((transaction) => {
    const { date, amount } = transaction;
    if (date in dateAmountObject) {
      dateAmountObject[date] += amount;
    } else {
      dateAmountObject[date] = amount;
    }
  });

  const formattedDateAmountArray = Object.entries(dateAmountObject).map(
    ([date, amount]) => ({
      date,
      amount,
    })
  );

  const sortedDateAmountArray = Util.reverseDateSorting(
    formattedDateAmountArray
  );

  const data = sortedDateAmountArray.map(({ date, amount }) => ({
    date: Util.dateFormatter(date),
    amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart className="chartBox" data={data}>
        <XAxis
          dataKey="date"
          interval="preserveStartEnd"
          ticks={["Feb 20, 2022", "Mar 03, 2022"]}
        />
        <Tooltip />
        <Legend />
        <Line dot={null} type="monotone" dataKey="amount" stroke="#FF5403" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
