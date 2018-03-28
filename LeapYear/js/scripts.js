//Backend

var leapYear = function(year) {
  if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
    return true;
  // } else if (year % 400 === 0) {
  //   return true;
  } else {
    return false;
  }
};




//Front end

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
