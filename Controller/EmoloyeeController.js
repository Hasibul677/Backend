const EmployeeModel = require("../Model/EmployeeModel");
const ProductModel = require("../Model/ProductModel");

exports.employeeCreate = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    const employee = await EmployeeModel.create({
      name,
      email,
      password,
      age,
    });

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (err) {
    res.send(err.message);
  }
};

exports.findCustomerDetails = async(req, res)=>{
  try{
    const id = req.params.id;

    const productInfo = await ProductModel.find({employee: id}).populate("employee", "name")

    res.status(201).json({
      success:true,
      productInfo

    })



  }catch(err){res.send(err.message)}
}