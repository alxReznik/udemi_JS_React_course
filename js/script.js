"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("how many movies you have seen?", "");
        while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("how many movies you have seen?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let movieName = prompt("please write a name of a movie you recently saw (1 - 50 symbols");
            let movieRate = prompt(`please rate "${movieName}" from 1 to 10`);
            if (movieName && movieName.length <= 50 && movieRate) {
                personalMovieDB.movies[movieName] = movieRate;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 2) {
            console.log("you have to watch more movies");
        } else if (personalMovieDB.count >= 2 && personalMovieDB.count <= 3) {
            console.log("you are good movieWatcher");
        } else if (personalMovieDB.count > 3) {
            console.log("you are a fantastic!");
        } else {
            console.log("something went wrong");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        };
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`your favorite genre at number ${i}`);

            if (genre === null || genre === "") {
                console.log("you entered wrong data");
                i--;
            }
            else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`favorite genre at number ${i + 1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private = personalMovieDB.private === false ? true : false;
    },
};
