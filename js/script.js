/* Задания на урок:

V__1) Удалить все рекламные блоки со страницы (правая часть сайта)

V__2) Изменить жанр фильма, поменять "комедия" на "драма"

V__3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    Реализовать только при помощи JS

V__4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    Отсортировать их по алфавиту 

V__5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "La la land",
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Одержимость",
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
})

poster.style.backgroundImage = "url(../img/bg.jpg)";
genre.textContent = "драма";
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
    </li>`;
})

// displaySortedMovieList(movieDB.movies, '.promo__interactive-list');
// removeElement('.promo__adv');
// const promoContentDiv = document.querySelector('.promo__content');
// promoContentDiv.style.width = "calc(100% - 300px";
// changeElementInnerHTML('.promo__bg .promo__genre', "драма");
// displayMoviesList(movieDB.movies, '.promo__interactive-list');

function changeElementInnerHTML(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = text;
    }
}

function hideElement(selector) {
    let targetElement = document.querySelector(selector);
    targetElement.style.display = "none";
}

function removeElement(selector) {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
        targetElement.remove();
    }
}

function displaySortedMovieList(movieList, container) {
    const moviesContainer = document.querySelector(container);
    if (moviesContainer) {
        moviesContainer.innerHTML = "";
    }

    const sortedList = movieList.sort();

    sortedList.forEach((movieTitle, i) => {
        const li = document.createElement("li");
        li.classList.add("promo__interactive-item");
        li.textContent = `${++i} .${movieTitle}`;
        moviesContainer.appendChild(li);
    })
}
