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
