import mongoose from "mongoose";
import slugify from "slugify";
import validator from "validator";

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
    console.log("Connected to database.");
  })
  .catch((error) => {
    throw new Error(error.message);
  });

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Not defined."],
      unique: true,
      trim: true,
      maxLength: [40, "Length must be <= 40."],
      minLength: [10, "Length must be >= 10."],
      validate: {
        validator: function (value) {
          return validator.isAlpha(value, "en-US", { ignore: " -" });
        },
        message: "Value must only contain characters [a-ZA-Z -].",
      },
    },
    slug: { type: String },
    duration: {
      type: Number,
      required: [true, "Not defined."],
    },
    maxGroupSize: {
      type: Number,
      require: [true, "Not defined."],
    },
    difficulty: {
      type: String,
      require: [true, "Not defined."],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Invalid value.",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Value must be >= 1."],
      max: [5, "Value must be <= 5."],
    },
    ratingsQuantity: { type: Number, default: 0 },
    price: {
      type: Number,
      required: [true, "Not defined."],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (discount) {
          return discount < this.price;
        },
        message: "Value must be >= tour price.",
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "No defined."],
    },
    description: { type: String, trim: true },
    imageCover: {
      type: String,
      required: [true, "Not defined."],
    },
    images: { type: [String] },
    createdAt: { type: Date, default: Date.now(), select: false },
    startDates: { type: [Date] },
    secretTour: { type: Boolean, default: false },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre("save", (next) => {
//   console.log("Just another hook.");
//   next();
// });

// tourSchema.post("save", (doc, next) => {
//   console.log(doc.name);
//   next();
// });

tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Find query duration: ${Date.now() - this.start} ms.`);
  next();
});

tourSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});

const Tour = mongoose.model("Tour", tourSchema);
await Tour.init();

export default Tour;