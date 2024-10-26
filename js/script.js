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
function generateAnswer(movieName, movieRate) {
    if (movieName && movieRate) {
        personalMovieDB.movies[movieName] = movieRate;
    }
};
console.log(personalMovieDB);
if (personalMovieDB.count < 2) {
    console.log("you have to watch more movies");
} else if (personalMovieDB.count >= 2 && personalMovieDB.count <= 3) {
    console.log("you are good movieWatcher");
} else if (personalMovieDB.count > 3) {
    console.log("you are a fantastic!");
}else{
    console.log("something went wrong");
}

