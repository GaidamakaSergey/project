"use strict";
const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("на сколько его оцените?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("на сколько его оцените?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
     

    