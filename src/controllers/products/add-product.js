import Product from "../../models/product";
//addCategory api used for add Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body 
//this api response is save Product in database in product Table
//this api used in ProductAdd component Dashboard project
const addProduct = async (req, res) => {
  try {
    const { name, status, textEditor, price, skuNum, quantity, category, image } = req.body;
    const data = await Product.create({
      name,
      status,
      textEditor,
      price,
      sku: skuNum,
      quantity,
      categoryId: category,
      image,
    });
    return res.status(200).json({
      data,
      success: true,
      message: "Product Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addProduct;
