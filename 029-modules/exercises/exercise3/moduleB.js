import { a } from "./moduleA.js";

const moduleB = "Module B";

const b = () => {
  for (let i = 0; i < moduleB.length; i++) {
    if (moduleB[i] === "B") {
      return moduleB[i];
    }
  }
};

console.log(moduleB);
export { b };
