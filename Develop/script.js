import DateTime from "../DateTime";
console.log(local);

$("#currentDay").text(DateTime.local().toLocaleString(DateTime.DATE_FULL));
