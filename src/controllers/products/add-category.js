import Category from "../../models/category";

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
