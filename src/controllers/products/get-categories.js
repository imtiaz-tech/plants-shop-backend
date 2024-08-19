import Category from "../../models/category";

const getCategories = async (req, res) => {
  try {
    let { pageno, perpage } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;
    const data = await Category.find()
      .skip((pageno - 1) * perpage)
      .limit(perpage);

    const count = await Category.count();

    return res.status(200).json({
      data,
      count,
      success: true,
      message: "Get category Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getCategories;
