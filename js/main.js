// js for my website

$('document').ready(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing - adopted from bootstrap.com
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      } 
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked - adopted from bootstrap.com
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll - adopted from bootstrap.com
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Fade in navbar, make background opaque on scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 40 ){
      $('#mainNav').addClass('fadeIn');
    } else {
      $('#mainNav').removeClass('fadeIn');
    };
    $(".titleImage").css("opacity", 1 - $(window).scrollTop() / 900);  
  });

  // AOS setup
  AOS.init({
    duration: 1200,
  })
})(jQuery); // End of use strict