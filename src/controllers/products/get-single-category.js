import Category from "../../models/category";

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
