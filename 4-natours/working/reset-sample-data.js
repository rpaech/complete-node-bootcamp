import fs from "fs";
import Tour from "./models/toursModel.js";
import User from "./models/usersModel.js";

const tours = JSON.parse(
  fs.readFileSync("./dev-data/data/test-tours.json", "utf-8"),
);

const users = JSON.parse(
  fs.readFileSync("./dev-data/data/test-users.json", "utf-8"),
);

async function deleteData() {
  try {
    console.log("Deleting existing tours from database...");
    await Tour.deleteMany();
    console.log("Deleting existing users from database...");
    await User.deleteMany();
  } catch (error) {
    console.log(error);
  }
}

async function importData() {
  try {
    console.log("Loading sample tours into database...");
    await Tour.create(tours);
    console.log("Loading sample users into database...");
    await User.create(users);
  } catch (error) {
    console.log(error);
  }
}

await deleteData();
await importData();

console.log("Done.");

process.exit();
