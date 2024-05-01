import mongoose from "mongoose";

const productSchema = (mongoose.Schema as any)({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  reviews: [
    {
      type: (mongoose.Schema as any).Types.ObjectId,
      ref: "Review",
    },
  ],
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  seller: {
    type: (mongoose.Schema as any).Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["inCart", "processing", "shipped", "delivered", undefined],
    default: undefined,
  },
});

export const Product = mongoose.model("Product", productSchema);
