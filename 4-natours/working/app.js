import path from "path";
import url from "url";
import express from "express";
import morgan from "morgan";
import AppError from "./helpers/appError.js";
import appErrorHandler from "./controllers/errorController.js";
import toursRouter from "./routers/toursRouter.js";
import usersRouter from "./routers/usersRouter.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

///////////////////////////////////////////////////////////////////////////////
// Register middleware

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

///////////////////////////////////////////////////////////////////////////////
// Register route handlers

const toursApiPath = "/api/v1/tours";
app.use(toursApiPath, toursRouter);

const usersApiPath = "/api/v1/users";
app.use(usersApiPath, usersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't route to path '${req.originalUrl}'.`, 404));
});

app.use(appErrorHandler);

///////////////////////////////////////////////////////////////////////////////
// Export default

export default app;
