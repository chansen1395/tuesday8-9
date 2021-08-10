$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickShow").click(function() {
    $("#walrus-showing").toggle();
  });
  $(".clickHide").click(function() {
    $("#walrus-showing").toggle();
  });

});