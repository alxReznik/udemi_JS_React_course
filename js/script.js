"use strict";

// const result = confirm("are you human?");
// console.log(result);
//  const answers = [];
//  answers[0] = prompt("what is your name?");
//  answers[1] = prompt("what is your last name?");
//  answers[2] = prompt("what is your age?");

//  document.write(answers);
let numberOfFilms = +prompt("how many movies you have seen?", ""); 1

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const movieName1 = prompt("please write a name of a movie you recently saw");
const movieRate1 = prompt(`please rate "${movieName1}" from 1 to 10`);
const movieName2 = prompt("please write a name of a movie you recently saw");
const movieRate2 = prompt(`please rate "${movieName2}" from 1 to 10`);

generateAnswer(movieName1, movieRate1);
generateAnswer(movieName2, movieRate2);

function generateAnswer(movieName, movieRate) {
    // debugger;
    if (movieName && movieRate) {
        personalMovieDB.movies[movieName] = movieRate;
    }
};
console.log(personalMovieDB);



// const rateMovie = function (movieName, movieRate) {
//     movies.answer = movieRate;

// };

