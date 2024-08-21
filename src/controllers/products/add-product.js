import Product from "../../models/product";

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
