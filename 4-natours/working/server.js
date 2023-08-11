import myapp from "./app.js";

const port = process.env.PORT || 3000;
myapp.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
