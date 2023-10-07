/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

const randomNumber = function* () {
  for (number = 0; ; number++) {
    yield number;
  }
};

const getRandomNumber = randomNumber();
console.log(getRandomNumber);
console.log(getRandomNumber.next());

let maxNumber = 10;
for (i = 0; i < maxNumber; i++) {
  console.log(Math.random());
}

// CAN USE WHILE LOOP
// let number1 = 0;
// while (number1 < 10) {
//   console.log(Math.random());
//   number1++;
// }
/*


Object [Generator] {}
{ value: 0, done: false }
0.5997784362050231       
0.5528178116909181
0.49998967905636427
0.19053515919351316
0.5433120449013364
0.15468425875889813
0.9184695816067605
0.4616514121137145
0.7919589689473112
0.8591126685451755

*/
