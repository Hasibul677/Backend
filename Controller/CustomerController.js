const CustomerModel = require("../Model/CustomerModel");

exports.createCustomer = async (req, res) => {
  try {
    const { name, address, country, age, product } = req.body;

    const customer = CustomerModel.create({
      name,
      country,
      address,
      age,
      product,
    });

    if (customer) {
      res.status(200).json({
        success: true,
        customer,
      });
    }
  } catch (err) {
    res.send(err.message);
  }
};
