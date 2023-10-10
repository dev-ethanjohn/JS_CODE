const moduleA = "Module A";

const a = () => {
  for (let i = 0; i < moduleA.length; i++) {
    if (moduleA[i] === "A") {
      return moduleA[i];
    }
  }
};

console.log(moduleA);
export { a };
