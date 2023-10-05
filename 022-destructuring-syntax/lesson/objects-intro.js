const movie = {
  title: "Dune",
  year: "2021",
  length: 155,
  book: true,
};

const { book, rating = 83 } = movie;
console.log(rating); // 83
console.log(book); // true

// direct access
console.log(movie.book); // true
console.log(movie.rating); // undefined
