for (let i = 0; i < 100; i += 5) {
  console.log(i);

  if (i === 25) {
    console.log("ha, gotcha!");
    break;
  }
  console.log("This is loop", i);
}

/*
    0
    This is loop 0
    5
    T   his is loop 5
    10
    This is loop 10
    15
    This loop 15
    20
    this loop 20
    25
    ha, gotcha!

*/
