const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabse = require("./Config/Database");
require("dotenv").config();
const port = process.env.PORT | 5000;

connectDatabse();

app.use(cors());
app.use(express.json());

// All Routes
const employee = require("./Route/EmployeeRoute");
const product = require("./Route/ProductRoute");
const customer = require("./Route/CustomerRoute");

app.use("/api/v1/", employee);
app.use("/api/v1/", product);
app.use("/api/v1/", customer);

app.get("/", (req, res) => {
  res.send("Api is running !!!");
});

app.listen(port, () => {
  console.log(`Server is connected on http://localhost:${port}`);
});
