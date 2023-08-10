import path from "path";
import url from "url";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toursDataFile = `${__dirname}/../dev-data/data/tours-test.json`;
const tours = JSON.parse(fs.readFileSync(toursDataFile));

export function getAllTours(req, res) {
  console.log(req.requestTime);
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

  if (!tour) return res.status(404).json({ status: "fail" });

  res.status(200).json({ status: "success", data: { tour } });
}

export function createTour(req, res) {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(toursDataFile, JSON.stringify(tours), (error) =>
    res.status(200).json({ status: "success", data: { tour: newTour } })
  );
}

export function updateTour(req, res) {
  const id = Number(req.params.id);
  const tour = tours.find((entry) => entry.id === id);

  if (!tour) return res.status(404).json({ status: "fail" });

  // TODO: Update an existing tour.

  res
    .status(200)
    .json({ status: "success", data: { tour: "<UPDATED TOUR GOES HERE>" } });
}

export function deleteTour(req, res) {
  const id = Number(req.params.id);
  const tour = tours.find((entry) => entry.id === id);

  // TODO: Delete an existing tour.

  if (!tour) return res.status(404).json({ status: "fail" });

  res.status(204).json({ status: "success", data: null });
}
