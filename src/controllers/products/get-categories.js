import Category from "../../models/category";

const getCategories = async (req, res) => {
  try {
    let { pageno, perpage, all } = req.query;
    pageno = parseInt(pageno) || 1;
    perpage = parseInt(perpage) || 10;

    let data = [];
    let count = undefined;
    if (all) {
      data = await Category.find();
    } else {
      data = await Category.find()
        .skip((pageno - 1) * perpage)
        .limit(perpage);
      count = await Category.count();
    }

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
