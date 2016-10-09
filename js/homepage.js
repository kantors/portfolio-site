$(document).ready(function () {
    $(".main-content").scroll(function () {

        scroll = $(".main-content").scrollTop();
        didScroll = true;
        //rotating circles
        var theta = ((scroll * .2) % 360);
        $('#designer').css({
            "transform": 'rotate(-' + theta + 'deg)',
            "-webkit-transform": 'rotate(-' + theta + 'deg)'
        });
        $('#developer').css({
            "transform": 'rotate(-' + theta + 'deg)',
            "-webkit-transform": 'rotate(-' + theta + 'deg)'
        });
    });

        $(".project").hover(
            function() {
                $( this ).find(".project-wrapper").css("background", "#fafafa");
                $( this ).find(".project-image img").css("opacity", "1");
                $( this ).find(".project-image ").css("background", "#ffffff");
            }, function() {
                $( this ).find(".project-wrapper").css("background", "#ffffff");
                $( this ).find(".project-image img").css("opacity", ".7");
                $( this ).find(".project-image ").css("background", "#f8f8f8");
            }
        );
});


