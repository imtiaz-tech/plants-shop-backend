import Category from "../../models/category";


const deleteSingleCategory = async(req,res)=>{
    try {
        const { id } = req.params;
        console.log("🚀 ~ deleteSingleCategory ~ id:", id)
        const data = await Category.findByIdAndDelete({ _id: id });
        return res.status(200).json({
          data,
          message: "Deleted Category Succesfully",
        });
      } catch (error) {
        console.log("🚀 ~ deleteSingleCategory ~ error:", error)
        return res.status(500).json({ message: error.message });
      }
}
export default deleteSingleCategory;