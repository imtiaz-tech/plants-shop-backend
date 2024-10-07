import Category from "../../models/category";
//addCategory api used for add category to database it gets two parameters from frontend name,status in req.body  
//this api response is save category in database
//this api used in CategoriesAdd component Dashboard project
const addCategory = async (req, res) => {
  try {
    const { name, status } = req.body;
    const data = await Category.create({ name, status });
    return res.status(200).json({
      data,
      success: true,
      message: "Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addCategory;
