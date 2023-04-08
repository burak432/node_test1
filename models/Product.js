const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

productSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lowercase: true,
    strict: true,
  });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
