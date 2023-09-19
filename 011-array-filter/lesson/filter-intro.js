// filter() takes with a function like map()
// it expects a boolean return value (True or False);
// create a new array copy, and doesnt modify the original array.
// select only elements based on the function

const nums = [5, 6, 7, 8, 9, 10];
console.log(nums); // [ 5, 6, 7, 8, 9, 10 ]

const evenNumbers = nums.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(evenNumbers); // [ 6, 8, 10 ]
