import fs from "fs";

// // Synchronous (blocking) method
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written.");

// Asynchronous (non-blocking) method
fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
  console.log(data);
});
console.log("We are reading a file...");
