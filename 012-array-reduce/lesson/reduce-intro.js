// reduce(parameter1,parameter2);
// paramater1 is like an accumulator
// parmater2 is the actual value
// paramater1 starts with an empty string " ";
// IT soft of concatenate array elements into 1 single output.

const nums = [5, 10, 15, 20, 25, 30, 35];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);
// 140

// USING ARRAY REDUCE.()
const sum2 = nums.reduce((result, number) => {
  console.log(result, number);
  /*
        0 5
        5 10
        15 15
        30 20
        50 25
        75 30
        105 35  
    */
  return result + number;
}, 0);
console.log(sum2); // 140

// Reduce without Return
console.log("---------------------");
const numm = [5, 10, 15, 25, 30, 35];

const summ2 = numm.reduce((result, number) => {
  if (number < 20) {
    console.log(result, number);
    return result + number;
  }
  // no return after if will make it UNDEFINED
  return result;
}, 0);

console.log("-----------");
console.log(summ2); // 30 ( 5+10+15)
