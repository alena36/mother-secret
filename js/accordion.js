(function () {
    'use strict';

    $('document').ready(function() {
        // 1. Скрыть все текстовые описания аккордеона, кроме первого.
        var accordion = $('.accordion');
        var accordionDescriptions = accordion.find('.accordion__text');
        accordionDescriptions.hide();
        accordionDescriptions.eq(0).show();
        // 2. Нужно повесить обработчик события клика на список
        // элементов аккордеонов, который будет отлавливать клики по шапкам
        // элементов аккордеона и показывать соседнее с шапкой описание,
        // а остальные открытые - сворачивать
        accordion.on('click', '.accordion__item', function(evt) {
            evt.preventDefault();

            var accordionHeader = $(this);
            var accordionDescription = accordionHeader.next('.accordion__text');

            if(accordionDescription.css('display') === 'none') {
                accordionDescriptions.slideUp();
                accordionHeader.next('.accordion__text').slideDown(600);
            }
        })
    });

})();