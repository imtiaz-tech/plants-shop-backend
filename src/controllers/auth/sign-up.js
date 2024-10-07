import Users from "../../models/users";
import { generateTokenResponse } from "../../middlewares/auth";
//SignUp api used for add user to database it gets 3 parameters from frontend {name,email,password} in req.body
//this api used in Register component for signup
//this api response is return add user in  database
const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({
        success: false,
        message: "name, email, password required",
      });

    let user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: "email already exist" });
    }

    const result = await Users.create({
      name,
      email,
      password,
    });
    const token = generateTokenResponse(result);
    return res.status(200).json({
      data: { token, user: result },
      success: true,
      message: "Signup successful!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export default SignUp;
