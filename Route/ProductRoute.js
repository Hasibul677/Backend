const express = require("express");
const { productCreate, findProductDetails } = require("../Controller/ProductController");

const router = express.Router();
router.route("/product").post(productCreate);
router.route("/product/:id").get(findProductDetails);

module.exports = router;
