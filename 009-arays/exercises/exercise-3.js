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
