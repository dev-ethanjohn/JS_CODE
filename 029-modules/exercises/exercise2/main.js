import { checkMovie, topMovies } from "./modules.js";

const checkMovieStatus = checkMovie("Zoolander");
console.log(checkMovieStatus); // true
console.log(checkMovie("Hello")); // false
console.log(topMovies); // [ 'Spirited Away', 'The Matrix', 'Star Wars', 'Zoolander' ]
