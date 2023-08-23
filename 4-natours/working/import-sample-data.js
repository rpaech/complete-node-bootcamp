import fs from "fs";
import path from "path";
import url from "url";
import Tour from "./models/toursModel.js";
import User from "./models/usersModel.js";
import Review from "./models/reviewsModel.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "dev-data/data/sample-tours.json"),
    "utf-8",
  ),
);

const users = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "dev-data/data/sample-users.json"),
    "utf-8",
  ),
);

const reviews = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "dev-data/data/sample-reviews.json"),
    "utf-8",
  ),
);

async function deleteData() {
  try {
    console.log("Deleting existing tours from database...");
    await Tour.deleteMany();
    console.log("Deleting existing users from database...");
    await User.deleteMany();
    console.log("Deleting existing reviews from database...");
    await Review.deleteMany();
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
    console.log("Loading sample reviews into database...");
    await Review.create(reviews);
  } catch (error) {
    console.log(error);
  }
}

await deleteData();
await importData();

console.log("Done.");

process.exit();
