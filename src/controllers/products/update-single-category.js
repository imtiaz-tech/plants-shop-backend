import Category from "../../models/category";

const updateSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    const data = await Category.updateOne(
      { _id: id },
      {
        name,
        status,
      }
    );
    return res.status(200).json({
      data,
      message: "Update category Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateSingleCategory;
