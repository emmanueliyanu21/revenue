import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Apr 01, 2022", date: 4000, amt: 2400 },
    { name: "", date: 3000, amt: 2200 },
    { name: "", date: 4000, amt: 2400 },
    { name: "", date: 2000, amt: 2600 },
    { name: "", date: 5000, amt: 2900 },
    { name: "Apr 30, 2022", date: 2000, amt: 2290 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart className="chartBox" data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line dot={null} type="monotone" dataKey="date" stroke="#FF5403" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
