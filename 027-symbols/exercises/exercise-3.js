const startTime = Date.now();
/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.asyncIterator property on "book" that
       will allow you to loop over it using a for-await-of-loop
       that will give you back the key-value pairs each loop but
       delayed by 1 second each as a paired array
       (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-await-of-loop to make sure it works

    HINT: An async generator function is the easiest way to do this
*/

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
  [Symbol.asyncIterator]: async function* () {
    for (const [key, value] of Object.entries(book)) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([key, value]);
        }, 1000);
      });
    }
  },
};

const asyncBookObject = book[Symbol.asyncIterator]();

const asyncBookExecutor = async () => {
  for await (const promise of asyncBookObject) {
    console.log(promise);
  }

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  console.log(`Total Execution Time: ${elapsedTime}ms`);

  // DESCTRUCTURING
  //   for await (const [key, value] of asyncBookObject) {
  //     console.log(key, value);
  //   }
};

asyncBookExecutor();
/*
[ 'name', '1984' ]
[ 'author', 'George Orwell' ]
[ 'year', 1949 ]
[ 'rating', 4.6 ]
[ 'genre', 'Science Fiction' ]
[ 'movie', true ]
*/

// SHORTER CODE

// const book = {
//   name: "1984",
//   author: "George Orwell",
//   year: 1949,
//   rating: 4.6,
//   genre: "Science Fiction",
//   movie: true,
//   [Symbol.asyncIterator]: async function* () {
//     for (const [key, value] of Object.entries(this)) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       yield [key, value];
//     }
//   },
// };

// const asyncBookIterator = book[Symbol.asyncIterator]();

// const asyncBookExecutor = async () => {
//   for await (const bookEntry of asyncBookIterator) {
//     console.log(bookEntry);
//   }
// };

// asyncBookExecutor();
