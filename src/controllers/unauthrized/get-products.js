import Product from "../../models/product";

const getProducts = async (req, res) => {
  try {
    let { pageno, perpage, searchProduct } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    let filter = {};
    if (searchProduct !== "" && searchProduct != "undefined") {
      filter = { name: { $regex: searchProduct, $options: "i" } };
    }
    const data = await Product.find(filter)
      .skip((pageno - 1) * perpage)
      .limit(perpage);
    const count = await Product.count(filter);
    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get Products Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getProducts;
