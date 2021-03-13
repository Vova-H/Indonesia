'use strict';



const LIST = [
    {
        name: 'Bunaken Park',
        duration: 4,
        guests: 2,
        price: 1000,
        text: 'Bunaken Marine Park is an impressive diving site that will help you get to know the rich underwater part of the country.',
        rating: '4,9',
        url: 'map',
        img: 't-1',

    },
    {
        name: 'Komodo island',
        duration: 5,
        guests: 3,
        price: 1200,
        text: 'The underwater life around Komodo Island is known as one of the most interesting divers in the world!',
        rating: '4,6',
        url: 'map2',
        img: 't-2',

    },
    {
        name: 'Bali island',
        duration: 6,
        guests: 4,
        price: 2200,
        text: `Most tourists start their journey in Indonesia on the country's most famous island.`,
        rating: '5,0',
        url: 'map3',
        img: 't-3',

    },
    {
        name: 'Chikapula park',
        duration: 7,
        guests: 5,
        price: 5000,
        text: 'Bunaken Marine Park is an impressive diving site that will help you get to know the rich underwater part of the country.',
        rating: '5',
        url: 'map',
        img: 't-1',

    },
    {
        name: 'Naruto village',
        duration: 8,
        guests: 6,
        price: 3000,
        text: 'The underwater life around Komodo Island is known as one of the most interesting divers in the world!',
        rating: '4,6',
        url: 'map2',
        img: 't-2',

    },
    {
        name: 'Town of Goddart',
        duration: 9,
        guests: 7,
        price: 2200,
        text: `Most tourists start their journey in Indonesia on the country's most famous island.`,
        rating: '5,0',
        url: 'map3',
        img: 't-3',

    },

];


(function ($) {
    $(document).ready(function () {
        // Code

        //фильтр туров по кнопке :(
        $('.btn--header').click(() => {
        });


        //чтобы не ругался на других страницах и не останавливал код
        drawList();

        function drawList() {
            let container = document.querySelector('.tourList'),
                selected = document.querySelector('.selectJS'),
                selectDays = document.querySelector('.selectDays'),
                selectGuests = document.querySelector('.selectGuests'),
                PARSED_LIST = JSON.parse(localStorage.getItem('tourList'));

            // container.innerHTML = '';

            if (PARSED_LIST === null || !PARSED_LIST.length) {
                LIST.forEach((item, i) => {
                    item.id = i;
                });

                localStorage.setItem('tourList', JSON.stringify(LIST));
                PARSED_LIST = LIST;
            }

            PARSED_LIST.forEach((item) => {
                if (container) {
                    container.append(renderItem(item.name, item.duration, item.guests, item.price, item.text, item.rating, item.url, item.img, item.id));
                }
                selected.append(renderSelect(item.name, item.id), renderLabel(item.name, item.id));
                selectDays.append(renderInpDays(item.name, item.id), renderLabelDays(item.duration, item.id));
                selectGuests.append(renderInpGuest(item.guests), renderLabelGuests(item.guests, item.id));
            });
        }

        //создаем инпуты
        function renderSelect(name, id) {
            let input = document.createElement('input');

            input.innerText = '';
            input.id = id;
            input.className = '_select__input';
            input.type = 'radio';
            input.name = 'tourlist';

            return input;
        }

        function renderInpDays(name, duration) {
            let input = document.createElement('input');

            input.innerText = '';
            input.id = duration + 'd';
            input.className = '_select__input';
            input.type = 'radio';
            input.name = 'Duration';

            return input;
        }

        function renderInpGuest(guests) {
            let input = document.createElement('input');

            input.innerText = '';
            input.id = `${guests}g`;
            input.className = '_select__input';
            input.type = 'radio';
            input.name = 'guests';

            return input;
        }


        //создаем лябле
        function renderLabel(name, id) {
            let label = document.createElement('label');

            label.for = id;
            label.className = '_select__label';
            label.innerText = name;

            return label;
        }

        function renderLabelDays(duration, id) {
            let label = document.createElement('label');

            label.for = id;
            label.className = '_select__label _select__label--duration';
            label.innerText = duration;

            return label;
        }

        function renderLabelGuests(guests, id) {
            let label = document.createElement('label');

            label.for = id;
            label.className = '_select__label _select__label--guests';
            label.innerText = `${guests} guest`;

            return label;
        }


        // создаем слайдер с турами
        function renderItem(name, duration, guests, price, text, rating, url, img, id) {
            let item = document.createElement('div'),
                pic = document.createElement('div'),
                sliderImg = document.createElement('img'),
                body = document.createElement('div'),
                space = document.createElement('div'),
                sliderTitle = document.createElement('h2'),
                stars = document.createElement('div'),
                star = document.createElement('i'),
                sliderRating = document.createElement('span'),
                box = document.createElement('div'),
                sliderText = document.createElement('p'),
                sliderMap = document.createElement('img'),
                link = document.createElement('a'),
                days = document.createElement('span'),
                sliderPrice = document.createElement('span');




            item.className = `slider__item`;
            sliderImg.className = 'slider__img';
            body.className = 'slider__body';
            space.className = 'slider__space';
            sliderTitle.className = 'slider__title';
            stars.className = 'slider__stars';
            star.className = 'icon-Star';
            sliderRating.className = 'slider__rating';
            box.className = 'slider__box';
            sliderText.className = 'slider__text';
            link.className = 'slider__btn btn';
            sliderMap.className = 'slider__map';
            days.className = 'slider__duration';
            sliderPrice.className = 'slider__price';
            pic.className = 'slider__pic';

            sliderTitle.innerText = name;
            sliderText.innerText = text;
            sliderRating.innerText = rating;
            days.innerText = `${duration} days`;
            sliderPrice.innerText = `${price} $`;


            sliderImg.src = `images/indonesia/${img}.jpg`;
            sliderImg.alt = sliderImg.src;
            sliderMap.src = `images/indonesia/${url}.svg`;
            sliderMap.alt = sliderMap.src;
            link.href = `bali.html`;
            link.innerText = 'Watch the tour';
            let star2 = star.cloneNode(true),
                star3 = star.cloneNode(true),
                star4 = star.cloneNode(true),
                star5 = star.cloneNode(true);


            pic.append(sliderImg);
            stars.append(star, star2, star3, star4, star5, sliderRating);
            box.append(sliderText, sliderMap);
            space.append(sliderTitle, stars, box);
            body.append(space, link);

            item.append(pic, body, days, sliderPrice);
            return item;
        }


        //tour выпадашка туров ----------------------------
        const selectSingle = document.querySelector('._select');
        const selectSingle_title = selectSingle.querySelector('._select__title');
        const selectSingle_labels = selectSingle.querySelectorAll('._select__label');

        // Toggle menu
        selectSingle_title.addEventListener('click', () => {
            if ('active' === selectSingle.getAttribute('data-state')) {
                selectSingle.setAttribute('data-state', '');
            } else {
                selectSingle.setAttribute('data-state', 'active');
            }
        });

        // Close when click to option
        for (let i = 0; i < selectSingle_labels.length; i++) {
            selectSingle_labels[i].addEventListener('click', (evt) => {
                selectSingle_title.textContent = evt.target.textContent;
                selectSingle.setAttribute('data-state', '');
            });
        }

        //duration выпадашка дней -------------------
        const selectDay = document.querySelector('._select--duration');
        const selectDay_title = selectDay.querySelector('._select__title--duration');
        const selectDay_labels = selectDay.querySelectorAll('._select__label--duration');

        // Toggle menu
        selectDay_title.addEventListener('click', () => {
            if ('active' === selectDay.getAttribute('data-state')) {
                selectDay.setAttribute('data-state', '');
            } else {
                selectDay.setAttribute('data-state', 'active');
            }
        });

        // Close when click to option
        for (let i = 0; i < selectDay_labels.length; i++) {
            selectDay_labels[i].addEventListener('click', (evt) => {
                selectDay_title.textContent = evt.target.textContent;
                selectDay.setAttribute('data-state', '');
            });
        }


        //guests выпадашка людей -------------------
        const selectGuest = document.querySelector('._select--guests');
        const selectGuest_title = selectGuest.querySelector('._select__title--guests');
        const selectGuest_labels = selectGuest.querySelectorAll('._select__label--guests');

        // Toggle menu
        selectGuest_title.addEventListener('click', () => {
            if ('active' === selectGuest.getAttribute('data-state')) {
                selectGuest.setAttribute('data-state', '');
            } else {
                selectGuest.setAttribute('data-state', 'active');
            }
        });

        // Close when click to option
        for (let i = 0; i < selectGuest_labels.length; i++) {
            selectGuest_labels[i].addEventListener('click', (evt) => {
                selectGuest_title.textContent = evt.target.textContent;
                selectGuest.setAttribute('data-state', '');
            });
        }

    });
})(jQuery);