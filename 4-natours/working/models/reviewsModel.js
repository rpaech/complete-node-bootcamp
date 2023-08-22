import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: { type: String, require: [true, "Not defined."], trim: true },
    rating: {
      type: Number,
      required: [true, "Not defined."],
      min: [1, "Value must be >= 1."],
      max: [5, "Value must be <= 5."],
    },
    createdAt: { type: Date, default: Date.now() },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: [true, "Not defined."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Not defined."],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "name" });
  this.populate({ path: "tour", select: "name photo" });
  next();
});

const Review = mongoose.model("Review", reviewSchema);
await Review.init();

export default Review;
