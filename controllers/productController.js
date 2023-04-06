const mongoose = require("mongoose");
const Product = require("../models/Product");

exports.newProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = await Product.create({ name, description, price });
  res.redirect("/products");
};

exports.showProduct = async (req, res) => {
  const id = req.params.id;
  const showProduct = await Product.findById(id);
  res.render("showProduct.ejs", { pageName: "products", showProduct });
};

exports.putEditProduct = async (req, res) => {
  const { name, description, price } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { name, description, price });
  res.redirect("/products");
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
};
