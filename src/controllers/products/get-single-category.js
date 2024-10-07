import Category from "../../models/category";
//getSingleCategory api used for get single category from database it gets 1 parameters from frontend id req.params
//this api response is return single category from database 
//this api used in CategoriesEdit component for edit category Dashboard project
const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findById(id);
    return res.status(200).json({
      data,
      success: true,
      message: "Get category Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleCategory;
