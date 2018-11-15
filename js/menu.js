(function(){
    'use strict';

    var menuButton = document.querySelector('.header__hamburger');
    var menu = document.querySelector('.main-navigation');
    var menuItems = Array.from(document.querySelectorAll('.main-navigation__item'));

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('visible');
    });

    document.addEventListener('click', function (e) {
        if (!e.srcElement.closest('.main-navigation.visible')
            && !e.srcElement.closest('.header__hamburger')) {
            menu.classList.remove('visible');
        }
    });

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function () {
            menu.classList.remove('visible');
        })
    }
})();