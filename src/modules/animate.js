'use strict';

const animate = () => {
    //бургер меню (фиксация) и btn up
    const navMenu = document.querySelector('.top-menu'),
        toTop = document.getElementById('totop');

    toTop.style.display = 'none';

    window.addEventListener('scroll', () => {
        //бургер меню (фиксация)
        if (window.scrollY > 186) {
            navMenu.style.position = 'fixed';
        } else {
            navMenu.style.position = 'static';
        }

        //btn up
        if (window.scrollY >= 646) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    });


    //анимация прокрутки к блоку
    const menuScroll = document.querySelectorAll('.hidden-small>li a');

    const animateScroll = (elem) => {
        let elemId = elem.getAttribute('href'),
            block = document.querySelector(elemId);

        block.scrollIntoView({block: "start", behavior: "smooth"});
    };

    menuScroll.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            animateScroll(elem);
        });
    });

    toTop.addEventListener('click', (e) => {
        e.preventDefault();
        animateScroll(toTop);
    });
};

export default animate;