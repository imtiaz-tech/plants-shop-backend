import Users from "../../models/users";

const changeUserAddressDetails = async (req, res) => {
  try {
    const user = req.user;
    const { country,state,
    postcode,streetAddress } = req.body;
    
    user.country=country;
    user.state=state;
    user.postcode=postcode;
    user.streetAddress=streetAddress;

    const data = await user.save();
    return res.status(200).json({
      data,
      message: "Change User Details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default changeUserAddressDetails;
