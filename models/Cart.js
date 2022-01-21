const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    desc: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
