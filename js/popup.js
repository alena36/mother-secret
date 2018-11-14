(function(){
    'use strict';

   var buttonOrder = document.querySelector('.order-btn');
   var popup = document.querySelector('.popup');
   var buttonClose = document.querySelector('.btn-close');
   var formPopup = document.querySelector('.form-popup');


    buttonOrder.addEventListener('click', function(){
        popup.classList.remove('visually-hidden');

        document.addEventListener('keydown', function(evt) {
            if (evt.keyCode === 27) {
                popup.classList.add('visually-hidden');
            }
        });
    });

    buttonClose.addEventListener('click', function() {
        popup.classList.add('visually-hidden');
    });

    formPopup.addEventListener("submit", function(evt) {
        evt.preventDefault();
        sendForm();

        popup.classList.add('visually-hidden');
    });

    function sendForm() {
       alert('Ваши данные отправлены!');
    }


})();
