(function(){
    'use strict';

    $('.grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: 270,
        gutter: 30,
        horizontalOrder: true,
        fitWidth: true
    });

})();