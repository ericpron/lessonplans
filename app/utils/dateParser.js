export default function dateParser(timestampString) {
  let timestamp = Number(timestampString);
  let date = new Date(timestamp);

  // Getting month, date, and year
  let month = date.getMonth() + 1; // Months are 0-based in JS
  let day = date.getDate();
  let year = date.getFullYear();

  // Formatting to "mm/dd/yyyy"
  let formattedDate = `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;

  return formattedDate;
}
