import fs from "fs";
import express, { response } from "express";
import { __dirname, __filename } from "./helpers.js";

const app = express();
app.use(express.json());

const toursDataFile = `${__dirname}/dev-data/data/tours-working.json`;
const toursApiPath = "/api/v1/tours";

const tours = JSON.parse(fs.readFileSync(toursDataFile));

app.get(toursApiPath, (request, response) =>
  response
    .status(200)
    .json({ status: "success", results: tours.length, data: { tours } })
);

app.get(`${toursApiPath}/:id`, (request, response) => {
  const id = Number(request.params.id);
  const tour = tours.find((entry) => entry.id === id);

  if (!tour) return response.status(404).json({ status: "fail" });

  response.status(200).json({ status: "success", data: { tour } });
});

app.post(toursApiPath, (request, response) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, request.body);

  tours.push(newTour);

  fs.writeFile(toursDataFile, JSON.stringify(tours), (error) =>
    response.status(200).json({ status: "success", data: { tour: newTour } })
  );
});

app.patch(`${toursApiPath}/:id`, (request, response) => {
  const id = Number(request.params.id);
  const tour = tours.find((entry) => entry.id === id);

  if (!tour) return response.status(404).json({ status: "fail" });

  // TODO: Update an existing tour.

  response
    .status(200)
    .json({ status: "success", data: { tour: "<UPDATED TOUR GOES HERE>" } });
});

app.delete(`${toursApiPath}/:id`, (request, response) => {
  const id = Number(request.params.id);
  const tour = tours.find((entry) => entry.id === id);

  // TODO: Delete an existing tour.

  if (!tour) return response.status(404).json({ status: "fail" });

  response.status(204).json({ status: "success", data: null });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
