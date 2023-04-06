const Product = require("../models/Product");

exports.getHomePage = (req, res) => {
  res.render("index.ejs", { pageName: "index" });
};

exports.getAboutPage = (req, res) => {
  res.render("about.ejs", { pageName: "about" });
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.render("products.ejs", { pageName: "products", products });
};

exports.addProduct = (req, res) => {
  res.render("addProduct.ejs", { pageName: "addNew" });
};

exports.getEditProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render("editProduct.ejs", { pageName: "products", product });
};
