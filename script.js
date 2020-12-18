// variables
var currentHour = parseInt(moment().format(`HH`));

// current date funtion
$("#currentDay").text(moment().format(`MMMM/DD/YYYY`));
var textArea = $(".text-input");

// this allows the calendar to check local time and shades out past times
$.each(textArea, function () {
  var timeBlock = $(".time-block");

  var dataTime = this.getAttribute("data-time");

  if (currentHour === dataTime) {
    textArea.removeClass("past", "future");
    textArea.addClass(".present");
  }
  if (currentHour > dataTime) {
    textArea.removeClass("present", "future");
    textArea.addClass("past");
  }
  if (currentHour < dataTime) {
    textArea.removeClass("present", "past");
    textArea.addClass("future");
  }
});

// save to local storage function
$(".saveBtn").on("click", function () {
  var description = $(this).siblings(".text-input").val();
  var time = $(this).siblings(".hours").attr("time-block");
  localStorage.setItem(time, description);
});
