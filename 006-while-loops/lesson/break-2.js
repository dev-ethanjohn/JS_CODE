let score = 0;

// infinite loop
while (true) {
  console.log(`inside the loop!`);

  // keep question until score >= 3, then exit the loop
  if (score >= 3) {
    break;
  }

  // infinitely increasing score
  score++;
}
// end of loop

console.log("Done the loop!");
