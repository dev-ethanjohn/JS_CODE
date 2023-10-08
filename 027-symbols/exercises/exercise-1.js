/*
    1. Create a variable "movie" that points at this Object:
       { name: "Blade Runner", director: "Ridley Scott",
         year: 1982, rating: 89, genre: "Science Fiction" }

    2. Add the two more properties to the "movie" Object:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6

    3. Use a for-of loop to loop through all the entries inside
       "movie" and print out their key-value pairs:
       Eg: name => Blade Runner, director => Ridley Scott

    4. How would you access and print out the symbols in "movie"?
*/
const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",

  [Symbol("budget")]: 30,
  [Symbol("boxOffice")]: 41.6,
};

for (const [key, value] of Object.entries(movie)) {
  console.log(`${key} => ${value}`);
}

// To access symbols
console.log(Object.getOwnPropertySymbols(movie));
/*
name => Blade Runner
director => Ridley Scott
year => 1982
rating => 89
genre => Science Fiction
[ Symbol(budget), Symbol(boxOffice) ]
*/
