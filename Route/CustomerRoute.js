const express = require("express");
const { createCustomer } = require("../Controller/CustomerController");
const router = express.Router();

router.route("/customer").post(createCustomer);
router.route("/customer/:id").post(createCustomer);

module.exports = router;
