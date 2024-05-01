import mongoose from "mongoose";

const reviewSchema = (mongoose.Schema as any)({
  user: {
    type: (mongoose.Schema as any).Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: (mongoose.Schema as any).Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Review = mongoose.model("Review", reviewSchema);
