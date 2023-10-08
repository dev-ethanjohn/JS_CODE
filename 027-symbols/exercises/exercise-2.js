/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.iterator property on "book" that will
       allow you to loop over it using a for-of-loop that will
       give you back the key-value pairs each loop as a paired
       array (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-of-loop to make sure it works

    HINT: A generator function is the easiest way to do this
*/

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
  [Symbol.iterator]: function* () {
    for (const [key, value] of Object.entries(book)) yield [key, value];
  },
};

for (const bookEntries of book) {
  console.log(bookEntries);
}
/*
[ 'name', '1984' ]
[ 'author', 'George Orwell' ]
[ 'year', 1949 ]
[ 'rating', 4.6 ]
[ 'genre', 'Science Fiction' ]
[ 'movie', true ]
*/

// IF I WANT to not use array, hence i need to DESCTRUCTURE IT
// for (const [key, value] of book) {
//   console.log(key, value);
// }
// /*
// name 1984
// author George Orwell
// year 1949
// rating 4.6
// genre Science Fiction
// movie true
// */
