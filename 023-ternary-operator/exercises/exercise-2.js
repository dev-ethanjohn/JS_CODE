/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"];

// USING if else
const newWiz = wizards.map((wiz) => {
  if (wiz.includes("n")) {
    return wiz.replace("n", "*");
  } else {
    return wiz.toUpperCase();
  }
});

console.log(newWiz); // [ 'Ga*dalf', 'VOLDEMORT', 'HARRY', 'JAFAR', 'Saruma*', 'Merli*' ]

// Using ternary
const newWizTernary = wizards.map((wiz) => {
  return wiz.includes("n") ? wiz.replace("n", "*") : wiz.toUpperCase();
});

console.log(newWizTernary); // [ 'Ga*dalf', 'VOLDEMORT', 'HARRY', 'JAFAR', 'Saruma*', 'Merli*' ]

// Shorter Version
const ternaryWizShort = wizards.map((wiz) =>
  wiz.includes("n") ? wiz.replace("n", "*") : wiz.toUpperCase()
);
console.log(ternaryWizShort); // [ 'Ga*dalf', 'VOLDEMORT', 'HARRY', 'JAFAR', 'Saruma*', 'Merli*' ]
