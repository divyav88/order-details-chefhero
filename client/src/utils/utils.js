export const dateFormat = (date) => {
  date = new Date(date);
  return date.toLocaleString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
