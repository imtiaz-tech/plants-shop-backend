import Users from "../../models/users";

const changeUserDetails = async (req, res) => {
  try {
    const user = req.user;
    const { name,lastName,
    email,phone,city,country,state,postcode,
    streetAddress,apartmentAddress, } = req.body;
    user.name = name;
    user.lastName=lastName;
    user.email=email;
    user.phone=phone;
    user.address.city=city;
    user.address.country=country;
    user.address.state=state;
    user.address.postcode=postcode;
    user.address.streetAddress=streetAddress;
    user.address.apartmentaddress=apartmentAddress;


   
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
