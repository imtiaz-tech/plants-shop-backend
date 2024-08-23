import Product from "../../models/product";

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
