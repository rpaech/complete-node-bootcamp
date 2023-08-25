import path from "path";
import url from "url";
import express from "express";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";

import AppError from "./helpers/appError.js";
import appErrorHandler from "./controllers/errorController.js";
import toursRouter from "./routers/toursRouter.js";
import usersRouter from "./routers/usersRouter.js";
import reviewsRouter from "./routers/reviewsRouter.js";
import viewsRouter from "./routers/viewsRouter.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

///////////////////////////////////////////////////////////////////////////////
// Register middleware

app.use(express.static(path.join(__dirname, "public")));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https:", "data:", "ws:"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", "https:", "data:"],
      scriptSrc: ["'self'", "https:"],
      styleSrc: ["'self'", "https:"],
      imgSrc: ["'self'", "https:", "data:"],
    },
  }),
);

app.use(
  "/api",
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Request limit exceeded; IP address blocked for one hour.",
  }),
);

app.use(mongoSanitize());

app.use(xss());

app.use(
  hpp({
    whitelist: [
      "duration",
      "difficulty",
      "price",
      "ratingsAverage",
      "ratingsQuantity",
      "maxGroupSize",
    ],
  }),
);

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

///////////////////////////////////////////////////////////////////////////////
// Test middlewar

app.use((req, res, next) => {
  // console.log("Cookies", req.cookies);
  next();
});

///////////////////////////////////////////////////////////////////////////////
// Register route handlers

const viewsPath = "/";
app.use(viewsPath, viewsRouter);

const toursApiPath = "/api/v1/tours";
app.use(toursApiPath, toursRouter);

const usersApiPath = "/api/v1/users";
app.use(usersApiPath, usersRouter);

const reviewsApiPath = "/api/v1/reviews";
app.use(reviewsApiPath, reviewsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't route to path '${req.originalUrl}'.`, 404));
});

app.use(appErrorHandler);

///////////////////////////////////////////////////////////////////////////////
// Export default

export default app;
