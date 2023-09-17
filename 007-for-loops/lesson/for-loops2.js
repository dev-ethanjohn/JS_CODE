for (let str = "monkey", i = 0; str !== "banana"; i++) {
  if (i === 5) {
    str = "banana";
  }
  console.log(i);
}

/*
    0
    1
    2
    3
    4
    5
*/
