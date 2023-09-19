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
