// js for my website

var images = ['../img/slides/cortina4.jpg','../img/slides/aspen.jpg','../img/slides/bomb.jpg',
'../img/slides/carolina.jpg','../img/slides/dartmouth.jpg','../img/slides/ecuador.jpg',
'../img/slides/firenze.jpg','../img/slides/whites.jpg','../img/slides/virginia.jpg'];
var count = 1;

$('document').ready(function($) {
  "use strict"; // Start of use strict

  //Preloader
  // $(window).load(function() {
  //   preloaderFadeOutTime = 500;
  //   function hidePreloader() {
  //     var preloader = $('.spinner-wrapper');
  //     preloader.fadeOut(preloaderFadeOutTime);
  //   }
  //   hidePreloader();
  // });

  // window.onload = function () {
  //   $('.spinner-wrapper').fadeOut(2000, function(){ 
  //     $('.spinner-wrapper').remove(); 
  //   });
  // }

  setTimeout(function(){
    $('.spinner-wrapper').fadeOut('slow', function() {
      $('.spinner-wrapper').remove();
    });
  }, 2500);

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(3000)
      .next()
      .fadeIn(3000)
      .end()
      .appendTo('#slideshow');
  },  7000);

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
    var scrolled = $(window).scrollTop();
    if (scrolled > 40 ){
      $('#mainNav').addClass('fadeIn');
    } else {
      $('#mainNav').removeClass('fadeIn');
    };
    if (scrolled > 1255 ){
      $('#mainNav').addClass('greenNav');
    } else {
      $('#mainNav').removeClass('greenNav');
    }
    //$(".titlePage").css("opacity", 1 - scrolled / 900); 
    if (!isMobile()) {
      $('#slideshow img').css('top',-(scrolled*0.3)+'px');
    }
  });

  $(".navbar-toggler").click( function(){
    $('#mainNav').addClass('fadeIn');
  });

  // AOS setup
  AOS.init({
    duration: 1200,
  })
})(jQuery); // End of use strict

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
