/**
 * Fade element in/out on page scroll
 */
;
(function( $ ) {
  $.fn.fadeInOut = function() {
    var element = this;
    var offset = $(window).scrollTop() / 250;
    if (offset <= 1) {
      element.css('opacity', 0 + $(window).scrollTop() / 250);
    } else {
      element.css('opacity', 1);
    }
    $(window).scroll(function(){
      offset = $(window).scrollTop() / 250;
      if (offset <= 1) {
        element.css('opacity', 0 + $(window).scrollTop() / 250);
      } else {
        element.css('opacity', 1);
      }
    });
  };
})(jQuery);
