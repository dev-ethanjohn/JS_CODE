/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    
    4. Catch the error and console.error the loop number
    5. Make sure the loop goes all the way to 10
*/

for (i = 1; i <= 10; i++) {
  console.log(i);
  // the code will continue up to 10 since the loop is outside the try-catch block. If the loop is inside, then it will stop at loop 5 with an error message
  try {
    if (i === 5) {
      throw new Error("Boom!");
    }
  } catch (error) {
    console.error(`Error on loop number ${i}`);
  }
}

/*
1
2
3
4
5
Error: Boom!
6
7
8
9
10
*/
