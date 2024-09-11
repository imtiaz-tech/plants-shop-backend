import Users from "../../models/users";


const getUsers = async (req, res) => {
    try {
      const data = await Users.find({ userType: "user" });
      return res.status(200).json({
        data,
        success: true,
        message: "Get users Succesfully",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export default getUsers;
  