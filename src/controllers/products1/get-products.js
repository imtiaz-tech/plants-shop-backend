import Product from "../../models/product";


const getProducts = async (req, res) => {
    try {
      const data = await Product.find();
      return res.status(200).json({
        data,
        success: true,
        message: "Get Products Succesfully",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export default getProducts;