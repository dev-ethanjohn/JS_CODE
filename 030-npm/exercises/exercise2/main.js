const fs = require("fs-extra");

const file = "hello.txt";
fs.outputFileSync(file, "Hello, from NodeJS!");
