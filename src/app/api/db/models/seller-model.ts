import mongoose from "mongoose";

const sellerSchema = (mongoose.Schema as any)({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  payment_info: {
    card_number: {
      type: Number,
      required: true,
    },
    card_holder: {
      type: String,
      required: true,
    },
    card_expiry: {
      type: Date,
      required: true,
    },
    cvv: {
      type: Number,
      required: true,
    },
  },
  store_name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: (mongoose.Schema as any).Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const Seller = mongoose.model("Seller", sellerSchema);
