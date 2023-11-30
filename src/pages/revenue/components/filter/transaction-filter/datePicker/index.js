import { Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

function index({ startDate, selectDate }) {
  return (
    <Box maxWidth="100%" w="100%">
      <DatePicker selected={startDate} onChange={selectDate} />
    </Box>
  );
}
export default index;
