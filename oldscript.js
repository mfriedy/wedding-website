/***************** Initiate Flexslider ******************/
$('.flexslider').flexslider({
    animation: "slide"
});

/***************** Initiate Fancybox ******************/
$('.single_image').fancybox({
    padding: 4
});

$('.fancybox').fancybox({
    padding: 4,
    width: 1000,
    height: 800
});

/***************** Tooltips ******************/
$('[data-toggle="tooltip"]').tooltip();

/***************** Nav Transformicon ******************/
$('.nav-toggle').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
});

/***************** Header BG Scroll ******************/

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $('section.navigation').addClass('fixed');
            $('header').css({
                "border-bottom": "none",
                "padding": "35px 0"
            });
            $('header .member-actions').css({
                "top": "26px",
            });
            $('header .navicon').css({
                "top": "34px",
            });
        } else {
            $('section.navigation').removeClass('fixed');
            $('header').css({
                "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                "padding": "50px 0"
            });
            $('header .member-actions').css({
                "top": "41px",
            });
            $('header .navicon').css({
                "top": "48px",
            });
        }
    });
});
/***************** Smooth Scrolling ******************/

$(function () {

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 90
                }, 2000);
                return false;
            }
        }
    });

});


/********************** Embed youtube video *********************/
$('.player').YTPlayer();
