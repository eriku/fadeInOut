/**
 * Fade element in/out on page scroll
 */
;
(function( $ ) {
  $.fn.fadeInOut = function(element) {
    var offset = $(window).scrollTop() / 250;
    function opacityFade(offset) {
      if (offset <= 1) {
        element.css('opacity', 0 + $(window).scrollTop() / 250);
      } else {
        element.css('opacity', 1);
      }
    }
    $(window).scroll(function(){
      offset = $(window).scrollTop() / 250;
      opacityFade(offset);
    });
  };
})(jQuery);
