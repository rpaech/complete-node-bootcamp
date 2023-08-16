import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

// process.on("unhandledRejection", (error) => {
//   console.log(">>>>> Unhandled Rejection <<<<<");
//   console.log(error.name, error.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });

// process.on("uncaughtException", (error) => {
//   console.log(">>>>> Uncaught Exception <<<<<");
//   console.log(error.name, error.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
