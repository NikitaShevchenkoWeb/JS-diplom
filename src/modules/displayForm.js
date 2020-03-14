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

export {x, y, displayForm};