$(document).ready(function() {
  $(".clickableWal").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable").click(function() {
    $("#info-showing").toggle();
    $("#info-hidden").toggle();
  });
});