import bcrypt from "bcryptjs";

// Helpers
import { generateToken } from "../helpers/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const user = await User.findOne({ email });

    // // Check if user exists
    // if (!user) {
    //   return res.status(401).json({
    //     ok: false,
    //     message: "Invalid email or password.",
    //   });
    // }

    // // Verify password
    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return res.status(401).json({
    //     ok: false,
    //     message: "Invalid email or password.",
    //   });
    // }

    // // Create JWT token
    // const token = generateToken(user._id);

    return res.status(200).json({
      ok: true,
      message: "Se ha iniciado sesión correctamente.",
      // token: token,
      // user: {
      //   name: user.name,
      //   email: user.email,
      //   avatar: user.avatar,
      // },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Algo ha ido mal. Vuelva a intentarlo más tarde.",
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const userExists = await User.findOne({ email }).select("email");

    // // Check if user exists
    // if (userExists) {
    //   return res.status(409).json({
    //     ok: false,
    //     message: "Email is already in use.",
    //   });
    // }

    // // Hash password
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    // // Create user
    // const user = await User({
    //   name,
    //   email,
    //   password: hashedPassword,
    // }).save();

    // // Create JWT token
    // const token = generateToken(user._id);

    return res.status(201).json({
      ok: true,
      message: "Se ha registrado correctamente.",
      // token: token,
      // user: {
      //   name: user.name,
      //   email: user.email,
      //   avatar: user.avatar,
      // },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Algo ha ido mal. Vuelva a intentarlo más tarde.",
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).json({
      ok: true,
      message: "Se ha cerrado la sesión correctamente.",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Algo ha ido mal. Vuelva a intentarlo más tarde.",
    });
  }
};
