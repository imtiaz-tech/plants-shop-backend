import Users from "../../models/users";

const changeUserPassword = async (req, res) => {
  try {
    const user = req.user;
    const { password } = req.body;
    user.password = password;
    const data = await user.save();
    console.log("🚀 ~ changeUserPassword ~ data:", data);
    return res.status(200).json({
      data,
      message: "Change Password Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeUserPassword;
