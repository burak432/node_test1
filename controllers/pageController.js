const mongoose = require("mongoose");
const Product = require("../models/Product");

exports.getHomePage = (req, res) => {
  res.status(200).render("index.ejs", { pageName: "index" });
};

exports.getAboutPage = (req, res) => {
  res.render("about.ejs", { pageName: "about" });
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).render("products.ejs", { pageName: "products", products });
};

exports.addProduct = (req, res) => {
  res.status(200).render("addProduct.ejs", { pageName: "addNew" });
};

exports.getEditProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).render("editProduct.ejs", { pageName: "products", product });
};
