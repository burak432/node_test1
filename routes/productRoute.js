const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.route("/").post(productController.newProduct);
router.route("/:id").get(productController.showProduct);
router.route("/:id").put(productController.putEditProduct);
router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
