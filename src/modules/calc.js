'use strict';

const calc = () => {
    //калькулятор
    const calc = () => {

        // let obj = {
        //     mozaika: [1999, 9900, 13900, 19900],
        //     schelkovo: [2999, 14990, 21990, 24990]
        // };
        //
        // let json = JSON.stringify(obj);
        // console.log(json);


        const cardsForm = document.getElementById('card_order'),
            cardMozaika = document.getElementById('card_leto_mozaika'),
            cardSchelkovo = document.getElementById('card_leto_schelkovo'),
            promocode = document.querySelector('.promocode'),
            priceTotal = document.getElementById('price-total');

        const month = document.querySelectorAll('input[name=card-type]'),
            clubName = document.querySelectorAll('input[name=club-name]');

        const data = () => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', '/price.json');
                request.setRequestHeader('Content-type', 'application/json');
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) { return; }

                    if (request.status === 200) {
                        const data = JSON.parse(request.responseText);

                        // let val = '';
                        // data.cars.forEach(item => {
                        //     if (item.brand === select) {
                        //         const {brand, model, price} = item;
                        //         val = `Тачка ${brand} ${model} <br> Цена: ${price}$`;
                        //     }
                        // });


                        resolve(data);
                    } else {
                        const error = 'Произошла ошибка';
                        reject(error);
                    }
                });
                request.send();
            })
        };


        const addTotalPrice = (val) => {
            month.forEach((item, i) => {
                item.addEventListener('click', () => {
                    if (promocode.value === 'ТЕЛО2020') { priceTotal.textContent = Math.floor(val[i] * 0.3); }
                    else priceTotal.textContent = val[i];
                })
            });
        };


        cardsForm.addEventListener('click',() => {
                console.log('click');
                data()
                    .then( (data) => {

                        let val = [];
                        if (cardMozaika.checked) {
                            val = [];
                            data.mozaika.forEach((item) => { val.push(item) });

                            addTotalPrice(val);

                        } else if (cardSchelkovo.checked) {
                            val = [];
                            data.schelkovo.forEach((item) => { val.push(item) });

                            addTotalPrice(val);
                        }

                    })
                    .catch( (error) => console.log(error) )
            }
        );

    };

    // calc();
};

export default calc;