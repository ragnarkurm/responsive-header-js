(function ($) {
  Drupal.behaviors.headerLayout = {
    attach: function (context, settings) {
      responsiveHeader('.container', '.container .widget');
    }
  };
})(jQuery);
