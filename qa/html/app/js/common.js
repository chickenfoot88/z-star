$(function() {

  $(".show-answers").click(function() {
    $(".more-answers").slideToggle(300);
    $('html, body').animate({ scrollTop: $(this).offset().top-20}, 500);
  });

  $(".close-answers").click(function() {
    $(".more-answers").slideUp(300);
    $('html, body').animate({ scrollTop: 0}, 500);
  })

});
