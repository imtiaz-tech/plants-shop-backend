import Users from "../../models/users";

const changeUserDetails = async (req, res) => {
  try {
    const user = req.user;
    const { name,lastName,
        email,phone,city } = req.body;
    user.name = name;
    user.lastName=lastName;
    user.email=email;
    user.phone=phone;
    user.city=city;
    const data = await user.save();
    return res.status(200).json({
      data,
      message: "Change User Details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeUserDetails;
