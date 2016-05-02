$(function() {

  // scroll animation when nav item click
  $('a[href*="#"]').on('click', function (e) {
    // prevent default action
    e.preventDefault();
    // set target to anchor's "href" attribute
    var target = $(this).attr('href');
    // scroll to each target
    $(target).velocity('scroll', {
      duration: 500,
      offset: -40,
      easing: 'ease-in-out'
    });
  });

  // SVG ANIMATIONS

  // Replace each img with [data-svg-inline and svg file extension
  // Take in account that if you need to wait to several SVGsto be loaded
  // You'll need to implement a counter / queue as this is asyncronous
  $('img[data-svg-inline][src$=".svg"]').each(function(idx, img){
    var $img = $(img);
    $.get( $img.attr('src'), function( data ) {
      $img.replaceWith( $( data ).find('svg') );
      animateSVGPyramids(); // Its in pyramid-animation.js
    }, 'xml');
  });


  // Mobile navigation
  $(document).on('click', '#toggle-menu', function(e) {
    e.preventDefault();

    $('html').toggleClass('opened');
    $('#nav').toggleClass('hide-on-mobile');
  });

  $(document).on('click', '#nav a', function() {
    $('#nav').toggleClass('hide-on-mobile');
    $('html').toggleClass('opened');
  });

});
