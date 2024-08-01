import dotenv from "dotenv";
import { encrypt, decrypt } from "../utils/rc4.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

dotenv.config();

export const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const encryptedPassword = encrypt(process.env.SECRET_KEY, password);
    const user = new User({
      username,
      email,
      password: encryptedPassword,
    });
    await user.save();

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const userData = {
      email: user.email,
      username: user.username,
      _id: user._id,
      
    };
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const decryptedPassword = decrypt(process.env.SECRET_KEY, user.password);
    if (decryptedPassword !== password) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};


export const verifyToken = async(req, res)=>{
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({valid:true, decoded });
  
  }
  catch(error){
    res.status(401).json({message:"Invalid token", error:error.message});
  }
}