/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/
let number = 10;

while (number <= 40) {
  if (number % 2 === 0) {
    console.log("Even number: " + number);
  } else {
    console.log("Odd number: " + number);
  }
  number++;
}

// [2] Sept 17, 2023
/*
Create a while loop that will print out all the numbers between 1 and 20,
but only print numbers that are divisible by 3.
*/

let numberIsDivivibleByThree = 1;

while (numberIsDivivibleByThree <= 20) {
  console.log(numberIsDivivibleByThree);
  numberIsDivivibleByThree++;
}

/* Result in console
    3
    6
    9
    12
    15
    18
*/
