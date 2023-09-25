jQuery(document).ready(function ($) {
    // Wrapper class of the counter containing element.
    if ($('.frame-type-counter_bar').length) {


        $.fn.isInViewport = function () {

            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window).on('resize scroll', function () {
            
            // The number (Text) that will be counted up to it's value
            $('.counter-number span').each(function () {

                if ($(this).isInViewport()) {

                    if (!$(this).data('hasRun')) {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                        $(this).data('hasRun', 1);
                    }

                }
            });
        });
    }
});