const currencyFormatter = (amount) => {
  if (isNaN(amount)) {
    return "USD --.--";
  }
  const formattedParts = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).formatToParts(amount);

  return formattedParts.reduce((result, part) => {
    if (part.type === "currency") {
      return "USD " + result;
    }
    return result + part.value;
  }, "");
};

function dateFormatter(originalDate) {
  const dateObject = new Date(originalDate);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return formattedDate;
}

function getDateRange(label) {
  const today = new Date();
  let startDate, endDate;

  switch (label) {
    case "Today":
      startDate = today;
      endDate = startDate;
      break;
    case "Last 7 Days":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 7);
      endDate = today;
      break;
    case "Last Month":
      startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      endDate = new Date(today.getFullYear(), today.getMonth(), 0);
      break;
    case "Last 3 Months":
      startDate = new Date(today.getFullYear(), today.getMonth() - 2, 1);
      endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      break;
    default:
      startDate = today;
      endDate = today;
      break;
  }

  return { startDate, endDate };
}

function getFilterCount(filter) {
  return Object.keys(filter).reduce((total, key) => {
    if (Array.isArray(filter[key])) {
      return total + filter[key].length;
    } else if (
      filter[key] &&
      key !== "range" &&
      (key === "startDate" || key === "endDate") &&
      filter["range"]
    ) {
      return total + 1;
    }
    return total;
  }, 0);
}

function isDateWithinRange(date, range) {
  if (date && range.length === 2) {
    const transactionDate = new Date(date);

    const startDate = new Date(range[0]);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(range[1]);
    endDate.setHours(23, 59, 59, 999);

    return transactionDate >= startDate && transactionDate <= endDate;
  }
  return false;
}

function reverseDateSorting(sortedArray) {
  return sortedArray.slice().reverse();
}

const Utils = {
  currencyFormatter,
  dateFormatter,
  getDateRange,
  getFilterCount,
  isDateWithinRange,
  reverseDateSorting,
};

export default Utils;
