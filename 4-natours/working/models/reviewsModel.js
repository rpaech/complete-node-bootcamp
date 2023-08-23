import mongoose from "mongoose";
import Tour from "./toursModel.js";

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

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "name photo" });
  // this.populate({ path: "tour", select: "name" });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: "$tour",
        numRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  await Tour.findByIdAndUpdate(tourId, {
    ratingsQuantity: stats.length > 0 ? stats[0].numRating : 0,
    ratingsAverage: stats.length > 0 ? stats[0].avgRating : 4.5,
  });
};

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.review = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.review.constructor.calcAverageRatings(this.review.tour);
});

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.tour);
});

const Review = mongoose.model("Review", reviewSchema);
await Review.init();

export default Review;
