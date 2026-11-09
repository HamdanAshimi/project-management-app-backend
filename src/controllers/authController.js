import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function signup(req, res) {
  try {
    console.log(req.body);

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Account created successfully",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
