import path from "path";
import url from "url";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toursDataFile = `${__dirname}/../dev-data/data/tours-test.json`;
const tours = JSON.parse(fs.readFileSync(toursDataFile));

export function checkId(req, res, next, val) {
  if (Number(val) > tours.length)
    return res.status(404).json({ status: "fail", message: "Invalid Id" });

  next();
}

export function checkBody(req, res, next) {
  if (!req.body.name || !req.body.price)
    return res
      .status(400)
      .json({ status: "fail", message: "Missing properties from body" });

  next();
}

export function getAllTours(req, res) {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
}

export function getTour(req, res) {
  const id = Number(req.params.id);
  const tour = tours.find((entry) => entry.id === id);

  res.status(200).json({ status: "success", data: { tour } });
}

export function createTour(req, res) {
  const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);

  fs.writeFile(toursDataFile, JSON.stringify(tours), () =>
    res.status(200).json({ status: "success", data: { tour: newTour } }),
  );
}

export function updateTour(req, res) {
  // TODO: Update an existing tour.

  res
    .status(200)
    .json({ status: "success", data: { tour: "<UPDATED TOUR GOES HERE>" } });
}

export function deleteTour(req, res) {
  // TODO: Delete an existing tour.

  res.status(204).json({ status: "success", data: null });
}
