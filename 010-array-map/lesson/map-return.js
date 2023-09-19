const numbers = [5, 10, 15, 20, 25];
console.log(numbers); // [ 50, 100, 150, 200, 250 ]

const timesTen = numbers.map((number) => {
  return number * 10;
});
console.log(timesTen); // [ 50, 100, 150, 200, 250 ]
// NOTE: ALways return when dealing with functions
