import Product from "../../models/product";
//updateSingleProduct api used for add update Product to database it gets 8 parameters from frontend {name,status,textEditor,price,sku,quantity,category,image} in req.body and {id} req.params
//this api response is save updated Product in database
//this api used in ProductEdit component Dashboard project
const updateSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, textEditor, price, skuNum, quantity, image, category, status } = req.body;
    const data = await Product.updateOne(
      { _id: id },
      { name, textEditor, price, sku: skuNum, quantity, image, categoryId: category, status }
    );
    return res.status(200).json({
      data,
      message: "Update Product Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateSingleProduct;
