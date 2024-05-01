import mongoose from "mongoose";

const cartItemSchema = (mongoose.Schema as any as any)({
  product: {
    type: (mongoose.Schema as any).Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const cartSchema = (mongoose.Schema as any)({
  user: {
    type: (mongoose.Schema as any).Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [cartItemSchema],
});

export const CartItem = mongoose.model("CartItem", cartItemSchema);
export const Cart = mongoose.model("Cart", cartSchema);
