const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const ProductCartSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User" /* , required: true */ },
  products: [
    {
      product_id: { type: Id, ref: "Product" },
      amount: { type: Number, default: 0 },
    },
  ],
});

const ProductCart = new mongoose.model("ProductCart", ProductCartSchema);

module.exports = ProductCart;
