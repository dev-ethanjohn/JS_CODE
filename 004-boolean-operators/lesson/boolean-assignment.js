// Logical assignments
const fruit = true && "bananas";
console.log(fruit); // bananas (returned)

console.log(false && "oranges"); // false
console.log(0 && "cucumbers"); // 0

console.log("-------");

console.log(true || "bananas"); // true
console.log(false || "oranges"); // oranges
console.log("" || "cucumbers"); // cucumbers

console.log("-------");

console.log(0 ?? "monkeys"); // 0
console.log("" ?? "koalas"); // ""
console.log(null ?? "elephants"); // elephants
