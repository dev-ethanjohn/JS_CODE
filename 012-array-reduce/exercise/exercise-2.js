/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%

    3. Print out "prices" and "afterTax"
*/
const prices = [1.23, 19.99, 85.2, 8, 5.2];

const afterTax = prices.reduce((sum, price) => {
  console.log(sum, price);
  /*
  0 1.23
  1.476 19.99
  21.465999999999998 85.2
  106.666 8
  114.666 5.2
  */
  if (price > 6) {
    return sum + price;
  }

  return sum + price * 1.2;
}, 0);
console.log(afterTax); // 120.90599999999999
