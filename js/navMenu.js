$(document).ready(function() {
  $('#hamburger').click(function() {
    $('.header-links__item').toggle('slow');
  });
}); //close jquery document loaded call

$('#hamburger-left').click(function() {
  $('.navigation-items__active').toggle('slow');
  $('.navigation-items__item').toggle('slow');
});
