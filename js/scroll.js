(function(){
    'use strict';

    $("#order-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 4000);
    });

    $("#faq-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#faq").offset().top
        }, 4000);
    });

    $("#team-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 4000);
    });

    $("#gallery-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 4000);
    });

    // $("#pricing-link").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $("#pricing").offset().top
    //     }, 2000);
    // });

    $("#testimonials-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#testimonials").offset().top
        }, 4000);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 4000);
    });

    $("#header-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 4000);
    });
})();