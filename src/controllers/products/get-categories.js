import Category from "../../models/category";
//getCategories api used for get categories from database it gets three parameters from frontend pageno,perpage and all in req.query
//this api response is return categories from database and categories count
//this api used in CategoriesList component for show categories,ProductAdd component for add product by category,ProductEdit component Dashboard project
//.skip used for frontend pagination how many categories skip for next or previous page
//.limit used for how many categories shows on single page
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
