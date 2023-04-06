const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.route("/").get(pageController.getHomePage);
router.route("/about").get(pageController.getAboutPage);
router.route("/products").get(pageController.getProducts);
router.route("/products/new").get(pageController.addProduct);
router.route("/products/:id/edit").get(pageController.getEditProduct);

module.exports = router;
