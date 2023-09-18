/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

for (number = 10; number <= 40; number++) {
  if (number % 2 === 0) {
    console.log("Even: ", +number);
  } else {
    console.log("Odd: ", +number);
  }
}

/*
Even:  10
Odd:  11 
Even:  12
Odd:  13 
Even:  14
Odd:  15 
Even:  16
Odd:  17 
Even:  18
Odd:  19 
Even:  20
Odd:  21 
Even:  22
Odd:  23 
Even:  24
Odd:  25 
Even:  26
Odd:  27 
Even:  28
Odd:  29 
Even:  30
Odd:  31 
Even:  32
Odd:  33 
Even:  34
Odd:  35 
Even:  36
Odd:  37 
Even:  38
Odd:  39
Even:  40
*/
