import mongoose from "mongoose";

const userSchema = (mongoose.Schema as any)({
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
  },
  payment_info: {
    card_number: {
      type: Number,
    },
    card_holder: {
      type: String,
    },
    card_expiry: {
      type: Date,
    },
    cvv: {
      type: Number,
    },
  },
  products: [
    {
      type: (mongoose.Schema as any).Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
