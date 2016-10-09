$(window).load(function () {
    $("#loader").delay(400).fadeOut("fast");

});

//variables for header animation
var didScroll;
var lastScrollTop = 0;
var navbarHeight = $("navigation").outerHeight();

$(document).ready(function () {
    $(document.body).delay(500).queue(function () {
        $(this).css("overflow", "auto");

    });

    var mobileMenuOpen = false;

    //Mobile Menu
    $("#hamburger").click(function () {

        if (!mobileMenuOpen) {

            $("#space").css("position", "fixed");
            $("body").css("position", "fixed");
        } else {
            $("#space").css("position", "absolute");
            $("body").css("position", "relative");
        }

        mobileMenuOpen = !mobileMenuOpen;
        $("#mobile-menue").fadeToggle();
        $(this).toggleClass('open');
    });


    //On Scroll
    $(".main-content").scroll(function () {
        scroll = $(".main-content").scrollTop();

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var top_of_object = $(this).offset().top + 10;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {

                $(this).delay(500).animate(
                    {opacity: 1, top: '0'}, 500);

            }

            lastScroll = scroll;


        });

        didScroll = true;

    });
    setInterval(function () {

        if (didScroll) {
            console.log("hs");
            hasScrolled();
            didScroll = false;
        }
    }, 0);

    function hasScrolled() {

        var st = $(".main-content").scrollTop();


        // If current position > last position AND scrolled past navbar...
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down

            $(".navigation").css("top", "-100px");
        } else {
            // Scroll Up
            // If did not scroll past the document (possible on mac)...

            $(".navigation").css("top", "0px");


        }
        lastScrollTop = st;
    }


});
