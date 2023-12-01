import { Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

function index({ selectedDate, handleChange, id, maxDate = new Date() }) {
  return (
    <Box maxWidth="100%" w="100%">
      <DatePicker
        id={id || "date"}
        selected={selectedDate}
        onChange={handleChange && handleChange}
        maxDate={maxDate}
      />
    </Box>
  );
}
export default index;
