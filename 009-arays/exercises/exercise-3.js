/*
    Create a variable called "total" that starts at 0

    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43
        
    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/

let total = 0;
const grades = [55, 63, 82, 98, 91, 43];

for (count = 0; count < grades.length; count++) {
  total += grades[count];
}

console.log(total / grades.length); // 72

// Practice 2: Sept 22;
/*
// Practice: Sept 23;

// Create a variable called "totalPoints" that starts at 0

// Create an array called "scores" with the following values:
// - 75
// - 88
// - 92
// - 67
// - 55
// - 98

// Calculate and print out the AVERAGE score as a letter grade (A, B, C, D, or F)
// - Use a custom grading scale: A (85-100), B (70-84), C (55-69), D (40-54), F (0-39)

// Twist: Additionally, print out the number of students who scored above the average.

// WHY is this? How does changing the grading scale affect the results?
*/

const totalPoints = 0;
const scores = [75, 88, 92, 67, 55, 98];
sum = 0;

let aveScore = (score) => {
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

let ave = aveScore(scores);
console.log(`The average is ${ave.toFixed(2)}`);
console.log("The average is ", +ave.toFixed(2));

if (ave >= 85 && ave <= 100) {
  console.log("A");
} else if (ave >= 70 && ave <= 84) {
  console.log("B");
} else if (ave >= 55 && ave <= 69) {
  console.log("C");
} else if (ave >= 40 && ave <= 54) {
  console.log("D");
} else {
  console.log("F");
}

let numberOfPassers = [];
for (i = 0; i < scores.length; i++) {
  if (scores[i] > ave) {
    numberOfPassers.push(scores[i]);
  } else {
    continue;
  }
}

console.log(numberOfPassers);
