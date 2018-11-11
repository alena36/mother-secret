(function(){
    'use strict';

    $("#order-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 1000);
    });

    $("#faq-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#faq").offset().top
        }, 1000);
    });

    $("#team-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 1000);
    });

    $("#gallery-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 1000);
    });

    // $("#pricing-link").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $("#pricing").offset().top
    //     }, 1000);
    // });

    $("#testimonials-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#testimonials").offset().top
        }, 1000);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#header-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });
})();