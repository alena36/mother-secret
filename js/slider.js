;(function() {
    'use strict';

    $(document).ready(function(){
        $('.slider-home').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 1000,
        });
        $('.slider-testimonials').slick({
            infinite: false,
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: false,
            nextArrow: false
        });
    });
})();