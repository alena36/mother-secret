(function(){
    'use strict';

   var buttonOrder = document.querySelector('.order-btn');
   var popup = document.querySelector('.popup');
   var buttonClose = document.querySelector('.btn-close');

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


    // var userNameInput = popup.querySelector('.form-popup__name');
    //
    // userNameInput.addEventListener('invalid', function (evt) {
    //     if (userNameInput.validity.tooShort) {
    //         userNameInput.setCustomValidity('Имя должно состоять минимум из 3-х символов');
    //     } else if (userNameInput.validity.tooLong) {
    //         userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    //     } else if (userNameInput.validity.valueMissing) {
    //         userNameInput.setCustomValidity('Обязательное поле');
    //     }
    // });
    //
    // var userPhoneInput = popup.querySelector('.form-popup__phone');
    //
    // userPhoneInput.addEventListener('invalid', function (evt) {
    //     if (userPhoneInput.validity.tooShort) {
    //         userPhoneInput.setCustomValidity('Номер должен состоять минимум из 10-ти символов');
    //     } else if (userPhoneInput.validity.tooLong) {
    //         userPhoneInput.setCustomValidity('Номер не должен превышать 15-ти символов');
    //     } else if (userPhoneInput.validity.valueMissing) {
    //         userPhoneInput.setCustomValidity('Обязательное поле');
    //     }
    // });


})();

