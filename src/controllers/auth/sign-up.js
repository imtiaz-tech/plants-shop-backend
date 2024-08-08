import Users from "../../models/users";
import { generateTokenResponse } from "../../middlewares/auth";

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
      return res
        .status(400)
        .json({ success: false, message: "email already exist" });
    }

    user = new Users({
      name,
      email,
      password: password,
    });
    const result = await user.save();
    const token = generateTokenResponse(result);
    return res.status(200).json({
      data: {
        token,
        user: result,
      },
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
