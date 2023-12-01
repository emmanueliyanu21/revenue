const data = {
  filterRanges: ["Today", "Last 7 Days", "Last Month", "Last 3 Months"],
  transactionTypes: [
    { label: "Store Transactions", value: "deposit" },
    { label: "Get Tipped Withdrawals", value: "tips" },
    { label: "Chargebacks", value: "chargeBack" },
    { label: "Cash Back", value: "cash" },
    { label: "Refer & Win", value: "referWin" },
  ],
  statusTypes: [
    { label: "Successful", value: "successful" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
  ],
  START_DATE: "startDate",
  END_DATE: "endDate",
};

export default data;
