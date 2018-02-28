// js for my website

var images = ['../img/slides/cortina4.jpg','../img/slides/aspen.jpg','../img/slides/bomb.jpg',
'../img/slides/carolina.jpg','../img/slides/dartmouth.jpg','../img/slides/ecuador.jpg',
'../img/slides/firenze.jpg','../img/slides/whites.jpg','../img/slides/virginia.jpg'];
var count = 1;

$('document').ready(function($) {
  "use strict"; // Start of use strict
  var i = 0;

  $('.titleImage').addClass('img1');

  var infiniteLoop = setInterval(function(){
    var prev = count;
    count++;
    if (count == 12){
      count = 1;
    }
    $('.titleImage').addClass('img'+count).removeClass('img'+prev);
  }, 6000);

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
    if ($(window).scrollTop() > 1255 ){
      $('#mainNav').addClass('greenNav');
    } else {
      $('#mainNav').removeClass('greenNav');
    }
    $(".titleImage").css("opacity", 1 - $(window).scrollTop() / 900); 
  });

  $(".navbar-toggler").click( function(){
    $('#mainNav').addClass('fadeIn');
  });

  // AOS setup
  AOS.init({
    duration: 1200,
  })



  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
  
})(jQuery); // End of use strict

