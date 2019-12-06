/*
 * Floating Label
 * Version: 1.0
 * Author: Thomas Mester
 * Repo: https://github.com/hotgeart/floating-label
 */

(function($) {
  $.fn.floatingLabel = function(options) {
    if (this.length) {
      // Default variable
      var input = "#" + this[0].id;
      input = $(input);
      var container = $(input).parent();
      var label = $(input).parent().children('label');
      
      container.addClass('floating-label');
      container.css('position', 'relative');
      label.css({
        'position': 'absolute',
        'top': 0,
        'left': input.css('padding-left'),
        'font-size': input.css('font-size'),
        'line-height': input.css('height'),
        'font-style': 'italic',
        'margin': 0,
        'padding': 0
      });

      input.focusin(function() {
        
      });
    }
  };
})(jQuery);
