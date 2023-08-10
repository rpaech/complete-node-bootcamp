import path from "path";
import url from "url";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersDataFile = `${__dirname}/../dev-data/data/tours-test.json`;
const users = JSON.parse(fs.readFileSync(usersDataFile));

export function getAllUsers(req, res) {
  res
    .status(500)
    .json({ status: "error", message: "This route is not yet defined." });
}

export function getUser(req, res) {
  res
    .status(500)
    .json({ status: "error", message: "This route is not yet defined." });
}

export function createUser(req, res) {
  res
    .status(500)
    .json({ status: "error", message: "This route is not yet defined." });
}

export function updateUser(req, res) {
  res
    .status(500)
    .json({ status: "error", message: "This route is not yet defined." });
}

export function deleteUser(req, res) {
  res
    .status(500)
    .json({ status: "error", message: "This route is not yet defined." });
}
