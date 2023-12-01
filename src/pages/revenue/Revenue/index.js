import React, { useEffect } from "react";
import Chart from "../components/chart";
import RevenueBalance from "../components/RevenueBalance";
import Summary from "../components/summary";
import Transactions from "../components/transactions";
import { Flex, Spacer, Box, useBreakpointValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletData } from "../../../store/actions/wallet.actions";
import Loader from "../../../commons/components/Loader";

function Revenue() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(fetchWalletData());
  }, [dispatch]);
  const marginValue = useBreakpointValue({ base: "20px", sm: "5rem" });
  return (
    <Box transition={"all 2s"}>
      <Loader loading={loading}>
        <Flex
          mb={marginValue}
          wrap="wrap"
          className="wrapper"
          alignItems={"flex-end"}
        >
          <Box className="chartBox">
            <RevenueBalance data={data?.balance} />
            <Chart />
          </Box>
          <Spacer />
          <Box className="summaryBox">
            <Summary data={data} />
          </Box>
        </Flex>
        <Transactions />
      </Loader>
    </Box>
  );
}

export default Revenue;
