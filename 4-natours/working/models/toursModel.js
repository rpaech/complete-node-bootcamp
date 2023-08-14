import mongoose from "mongoose";

const dbUrl = String(process.env.DB_URL)
  .replace("<username>", process.env.DB_USERNAME)
  .replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to database.");
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name."],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, "A tour must have a price."] },
});

const Tour = mongoose.model("Tour", tourSchema);

await Tour.init();

export default Tour;
