import fs from "fs";
import Tour from "./models/toursModel.js";

const tours = JSON.parse(
  fs.readFileSync("./dev-data/data/tours-simple.json", "utf-8"),
);

async function deleteData() {
  try {
    await Tour.deleteMany();
  } catch (error) {
    console.log(error);
  }
}

async function importData() {
  try {
    await Tour.create(tours);
  } catch (error) {
    console.log(error);
  }
}

console.log("Deleting existing tours data from database...");
await deleteData();

console.log("Loading sample tours data into database...");
await importData();

console.log("Done.");

process.exit();
