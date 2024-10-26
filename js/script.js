"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many movies you have seen?", "");
    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many movies you have seen?", "");
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        // debugger;
        let movieName = prompt("please write a name of a movie you recently saw (1 - 10 symbols");
        let movieRate = prompt(`please rate "${movieName}" from 1 to 50`);
        if (movieName && movieName.length <= 50 && movieRate) {
            generateAnswer(movieName, movieRate);
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
// rememberMyFilms();

function generateAnswer(movieName, movieRate) {
    if (movieName && movieRate) {
        personalMovieDB.movies[movieName] = movieRate;
    }
};
// console.log(personalMovieDB);
function detectPersonalLevel() {
    if (personalMovieDB.count < 2) {
        console.log("you have to watch more movies");
    } else if (personalMovieDB.count >= 2 && personalMovieDB.count <= 3) {
        console.log("you are good movieWatcher");
    } else if (personalMovieDB.count > 3) {
        console.log("you are a fantastic!");
    } else {
        console.log("something went wrong");
    }

}

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    };
};

// showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`your favorite genre at number ${i}`);
    }
};
// writeYourGenres();
