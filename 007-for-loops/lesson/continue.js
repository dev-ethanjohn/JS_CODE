for (let i = 0; i < 100; i += 10) {
  console.log(i);

  if (i === 20) {
    i += 20;
    continue;
  }
  console.log("loop number!", i);
  if (i === 60) {
    break;
  }
}

/*
    0
    loop number! 0
    10
    loop number! 10
    20
    50
    loop number! 50
    60
    loop number! 60

*/
