const express = require("express");
const { employeeCreate, findCustomerDetails } = require("../Controller/EmoloyeeController");

const router = express.Router();

router.route("/employee").post(employeeCreate);
router.route("/employee/:id").get(findCustomerDetails);

module.exports = router;
