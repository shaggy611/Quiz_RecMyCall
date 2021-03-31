$(document).ready(function () {

    (function($) {
      var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
      $.fn.nodoubletapzoom = function() {
        if (IS_IOS)
          $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp
              , t1 = $(this).data('lastTouch') || t2
              , dt = t2 - t1
              , fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) return;
    
            e.preventDefault();
            $(this).trigger('click').trigger('click');
          });
      };
    })(jQuery);

    // $(".quiz__video").get(0).play();
    // document.querySelector("#video-play").addEventListener('canplaythrough');
});  