$(document).ready(function(){

    $('.content').fadeTo("slow", 1);

    var $header = $('#site-header');

    var prevScrollPos = $(window).scrollTop();
    $(window).scroll(function() {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            $header.removeClass('animated slideOutUp').addClass('animated slideInDown')
        } else {
            $header.removeClass('animated slideInDown').addClass('animated slideOutUp')
        }
        prevScrollPos = currentScrollPos;
    });

    $("#work-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 750);
    });

    var prevMousePos = 0;
    $(window).mousemove( function(event) {
        var currentMousePos = event.pageY;
        var cursor = currentMousePos - $(window).scrollTop();
        var isPresent =$header.hasClass('slideInDown');
        var atTop = $(window).scrollTop() === 0;

        if (isPresent && (cursor <= 60 || prevMousePos > currentMousePos)) {
            //do nothing
        } else if (!atTop && cursor <= 60) {
            $header.removeClass('animated slideOutUp').addClass('animated slideInDown');
        } else if (!atTop) {
            $header.removeClass('animated slideInDown').addClass('animated slideOutUp');
        }
        prevMousePos = currentMousePos;
    });
});