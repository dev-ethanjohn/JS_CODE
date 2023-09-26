/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/
const greeting = "Hello, nice to meet you!";

for (count = 0; count < greeting.length; count++) {
  console.log(greeting[count]);
}
/*
H
e
l
l
o
,

n
i
c

t

e
t

y
o
u
!

*/

// Practice 2: Sept 22, 2023
/*
// Practice: Sept 23;

// Create a variable called "sentence" and initialize it to:
// "Coding is fun and challenging!"

// Use a loop to loop through this String (just like you would an array)
// - On each loop iteration, print out what is at that index

// Twist: Instead of printing out the characters, print out the character's ASCII code value.

// WHY does this happen?
// WHAT is a String, really?


*/

const sentence = "Coding is fun and challenging!";

for (i = 0; i < sentence.length; i++) {
  let asciiCode = sentence.charCodeAt(i);

  // Print the character and its ASCII code
  console.log(`Character: ${sentence[i]}, ASCII Code: ${asciiCode}`);
}
