/*
 * Floating Label
 * Version: 1.0
 * Author: Thomas Mester
 * Repo: https://github.com/hotgeart/floating-label
 */

(function($) {
  $.fn.floatingLabel = function(options) {
    this.each(function() {
      // Default variable
      var input = "#" + this.id;
      input = $(input);
      var container = $(input).parent();
      var label = $(input)
        .parent()
        .children("label");
      var notFirstTime = false; // to avoid to play the animation the first time

      // Defaults settings
      var defaults = {
        transition: true,
        transitionProperties: "all",
        transitionDuration: ".2s",
        placeholderColor: false
      };

      var settings = $.extend({}, defaults, options);

      // Setup
      container.addClass("floating-label");
      container.css("position", "relative");
      label.addClass("floating");
      style();

      // Style
      function style(forceFloat) {
        // Floating
        if (
          input.hasClass("not-empty") ||
          input.val().length > 0 ||
          forceFloat
        ) {
          label.addClass("is");
          label.css({
            position: "absolute",
            top: 0,
            left: input.css("padding-left"),
            color: input.css("color"),
            fontSize: "10px",
            lineHeight: "1",
            fontStyle: "normal",
            textTransform: "uppercase",
            backgroundColor: input.css("background-color"),
            transform: "translateY(-50%)",
            margin: "0 0 0 -3px",
            padding: "1px 3px"
          });

          if (settings.transition && notFirstTime) {
            label.css({
              "transition-property": settings.transitionProperties,
              "transition-duration": settings.transitionDuration
            });
          }
          // NOT floating
        } else {
          label.removeClass("is");
          label.css({
            position: "absolute",
            top: input.css("padding-top"),
            left: input.css("padding-left"),
            fontSize: input.css("font-size"),
            lineHeight: "",
            fontStyle: "italic",
            textTransform: "none",
            backgroundColor: "transparent",
            transform: "none",
            margin: 0,
            padding: 0
          });

          if (settings.transition && notFirstTime) {
            label.css({
              "transition-property": settings.transitionProperties,
              "transition-duration": settings.transitionDuration
            });
          }

          if (settings.placeholderColor !== false) {
            label.css("color", settings.placeholderColor);
          }
        }
      }

      input
        .focusin(function() {
          notFirstTime = true;
          style(true);
        })
        .focusout(function() {
          notFirstTime = true;
          style();
        });

      // Add/remove not-empty class if we're typing content
      input.keyup(function() {
        if (input.val().length === 0) {
          input.removeClass("not-empty");
        } else {
          input.addClass("not-empty");
        }
      });
    });
    // Add not-empty class if the input isn't empty
    $("input[type=text]").each(function() {
      if ($(this).val().length != 0) {
        $(this).addClass("not-empty");
      }
    });
  };
})(jQuery);
