$(function() {

	$(".faq-answer-btn").click(function() {
    $(this).parent().children(".faq-answer-body").slideToggle("slow");
    $(this).children(".btn").toggleClass("active-faq-btn");
    $('html, body').animate({ scrollTop: $(this).offset().top-300}, 500);
  });

});
