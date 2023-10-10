import { Command } from "commander";

// Create a new Command instance
const program = new Command();

// Define the option for the name with a description
program.option("-n, --name <name>", "your name");

// Parse the command-line arguments
program.parse(process.argv);

// Retrieve the parsed options
const options = program.opts();

// Display the greeting message with the provided name
console.log(`Hello, ${options.name}!`);
