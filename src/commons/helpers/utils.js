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

const Utils = {
  currencyFormatter,
  dateFormatter,
};

export default Utils;
