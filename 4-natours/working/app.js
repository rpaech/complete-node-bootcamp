import express from "express";
import morgan from "morgan";
import toursRouter from "./routers/toursRouter.js";
import usersRouter from "./routers/usersRouter.js";

const app = express();

///////////////////////////////////////////////////////////////////////////////
// Register middleware

app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware! 😊");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

///////////////////////////////////////////////////////////////////////////////
// Register route handlers

const toursApiPath = "/api/v1/tours";
app.use(toursApiPath, toursRouter);

const usersApiPath = "/api/v1/users";
app.use(usersApiPath, usersRouter);

///////////////////////////////////////////////////////////////////////////////
// Export default

export default app;
