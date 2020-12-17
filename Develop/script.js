// const moment = require("./moment");
var currentDate = moment().format(`MMMM/DD/YYYY`);
var dateTime = $("#currentDay");

$("#currentDay").text(currentDate);
var textArea = $(".text-input");
var texPull = JSON.parse(localStorage.getItem(textArea)) || [];
// var savedText = [(nine: {})];
// this area is where luxon would go if it actually worked like it says it does

// this area is where luxon would go for choosing colors of text area on time if it functioned like it should

$("button").click(function () {
  console.log("clicked");

  localStorage.setItem("text-input", JSON.stringify(texPull));
});
