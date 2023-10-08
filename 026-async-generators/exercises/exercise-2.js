/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/

const asyncGen = async function* (sentence) {
  const vowels = "aeiou";

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if (vowels.includes(letter)) {
          resolve("*");
        } else {
          resolve(letter.toUpperCase());
        }
      }, 100);
    });
  }
};

let message = "Monkeys are the coolest animal!";
const asyncGenObject = asyncGen(message);

const asyncGenExecutor = async () => {
  for await (const letter of asyncGenObject) {
    console.log(letter);
  }
};

asyncGenExecutor();
/*
M
o*
N
K
e*
Y
S
 
a*
R
e*
 
T
H
e*
 
C
o*
o*
L
e*
S
T
 
a*
N
i*
M
a*
L
!

*/
