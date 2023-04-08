const mongoose = require("mongoose");
const Product = require("../models/Product");

exports.newProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await Product.create({ name, description, price });
    res.status(201).redirect("/products");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.showProduct = async (req, res) => {
  try {
    const slug = req.params.slug;
    const showProduct = await Product.findOne({slug});
    res
      .status(200)
      .render("showProduct.ejs", { pageName: "products", showProduct });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.putEditProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      price,
    });
    res.status(200).redirect("/products");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
