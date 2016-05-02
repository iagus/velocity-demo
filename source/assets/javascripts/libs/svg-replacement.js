/**
 * Inline SVGs in document with JQuery by Carlos Cabo
 * https://gist.github.com/carloscabo/8bbc6799434b41d18c1007c45e26c9b6
 * Replaces each img with [data-inline-svg] data attribute and svg file extension
 * <img src="path/file.svg" data-inline-svg>
 * Launch callback function once all the replacements are done
 */
(function() {
  var
    $svgs = $('[data-inline-svg][src$=".svg"]');
  if ($svgs.length) {
    var
      $gets = []; // Request will be stored here
    $svgs.each(function(idx, img) {
      var $img = $(img);
      $gets.push(
        $.get( $img.attr('src'), function( data ) {
          $img.replaceWith( $( data ).find('svg') );
        }, 'xml')
      );
    });
    // When all request are done, launch animation
    // Passing an array of ajax queries to a function that expects parameters
    $.when.apply( $, $gets ).then( function() {
      animateSVG();
    });
  }
})();
