/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

const countTo10 = function* () {
  // can use for loop
  let i = 0;
  while (i <= 10) {
    yield i;
    i++;
  }
};

const generatorObject = countTo10();
console.log(generatorObject); // Object [Generator] {}
console.log(generatorObject.next());

for (const value of generatorObject) {
  console.log(value);
}

/*
Object [Generator] {}
{ value: 0, done: false }
1
2
3
4
5
6
7
8
9
10
*/
