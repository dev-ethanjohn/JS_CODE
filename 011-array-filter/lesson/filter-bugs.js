const nums = [5, 6, 7, 8, 9, 10];
console.log(nums); // [ 5, 6, 7, 8, 9, 10 ]

const oddNumbers = nums.filter((num) => {
  if (num % 2 === 1) {
    return true; // truthy value (thus true, and will run the condition and return it)
  }
});

console.log(oddNumbers); //
