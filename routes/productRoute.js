const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.route("/products").post(productController.newProduct);
router.route("/products/:id").get(productController.showProduct);
router.route("/products/:id").put(productController.putEditProduct);
router.route("/products/:id").delete(productController.deleteProduct);

module.exports = router;
