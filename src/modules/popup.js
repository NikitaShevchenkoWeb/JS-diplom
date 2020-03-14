'use strict';

const popup = () => {
    //localstorage load
    const promoCode = document.querySelector('.promocode'),
        fixedGift = document.querySelector('.fixed-gift');

    if (localStorage.code && promoCode) {
        promoCode.value = localStorage.code;
        fixedGift.style.display = 'none'
    }


    //выбор клуба (var)
    const selectBtnClub = document.querySelector('.clubs-list'),
        clubsList = selectBtnClub.querySelector('ul');

    //записаться на бесплатный визит / кнопка "перезвоните мне" / кнопка "выбор клуба"
    let x = 0, y = 0;

    const displayForm = (form, display = 'block') => {
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = display;
        } else {
            form.style.display = 'none';
        }

        if (form.className.split(' ')[0] === 'popup-menu') {
            window.scrollTo(x, y);
        }
    };

    let popupId = '',
        form = '';

    document.addEventListener('click', (e) => {
        let target = e.target;

        //popup: Ваша заявка отправлена
        const successForm = document.getElementById('thanks'),
            giftForm = document.getElementById('gift');
        if (target.matches('#thanks .close_icon') || target.matches('#thanks .overlay') || target.matches('#thanks .close-btn')) {
            displayForm(successForm);
        }

        //display gift click OK
        if (target.matches('.close-btn') && target.closest('#gift')) {
            displayForm(giftForm);
        }

        //Записаться на бусп. везит и Кнопка "Перезвоните мне"
        if (target.matches('.open-popup') || target.matches('#head-callback-btn')) {
            popupId = target.getAttribute('data-popup');
            form = document.querySelector(`${popupId}`);

            displayForm(form);
        }

        if ((target.matches(`${popupId} .overlay`) || target.matches(`${popupId} .close_icon`)) && form) {
            displayForm(form)
        }

        //выбор клуба
        if (target.closest('.clubs-list')) {
            displayForm(clubsList);
        } else if (!target.closest('.clubs-list')) {
            clubsList.style.display = 'none';
        }

        //подарок
        if (target.closest('.fixed-gift')) {
            target.style.display = 'none';

            popupId = target.getAttribute('data-popup');
            form = document.querySelector(`${popupId}`);

            displayForm(form);
        }

        if (target.matches('#gift button')) {localStorage.code = 'ТЕЛО2019';}

        //меню-бургер
        if (target.matches('.menu-button img')) {
            x = window.scrollX;
            y = window.scrollY;

            popupId = target.getAttribute('data-popup');
            form = document.querySelector(`${popupId}`);

            displayForm(form, 'flex')
        }

        if (target.closest(`${popupId} .close-menu-btn_mobile`) || target.closest(`${popupId} .small-menu li`)) {
            displayForm(form)
        }
    });
};

export default popup;