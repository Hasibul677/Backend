const ProductModel = require("../Model/ProductModel");


exports.productCreate = async (req, res) => {
  const { name, description, price, stock, employee } = req.body;
  try {
    const product = await ProductModel.create({
      name,
      description,
      price,
      stock,
      employee,
    });

    if (product) {
      res.status(200).json({
        success: true,
        product,
      });
    }
  } catch (err) {
    res.send(err.message);
  }
};

//single populate find method
exports.findProductDetails = async (req, res) => {
  try {
    const id = req.params.id;
    let product = await ProductModel.findById(id).populate("employee", "name");

    if (product) {
      res.status(201).json({
        success: true,
        product,
      });
    }
  } catch (err) {
    res.send(err.message);
  }
};


