import { generateTokenResponse } from "../../middlewares/auth";

const SignIn = async (req, res) => {
  try {
    if (req.error) return res.status(401).json(req.error);
    const user = req.user;

    const token = generateTokenResponse(req.user);

    return res.status(200).json({
      data: {
        token,
        user,
      },
      success: true,
      message: "Sigin successful!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export default SignIn;
