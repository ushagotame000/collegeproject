import ImageModel from "../models/image.js";
import fs from "fs";

export const addToProfile = async (req, res) => {
  const profile = new ImageModel({
    photoUrl: req.body.photoUrl,
    photo: req.file?.filename, // Make sure req.file exists
    userName: req.body.userName,
    bio: req.body.bio,
    dob: req.body.dob,
    hobbies: req.body.hobbies,
  });

  try {
    await profile.save(); // Save the profile model
    res.json({ success: true, message: "Profile added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    // Implement update logic 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listProfile = async (req, res) => {
  try {
    const profiles = await ImageModel.find({});
    res.json({ success: true, data: profiles });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const removeProfile = async (req, res) => {
  try {
    const profile = await ImageModel.findById(req.body.id);
    fs.unlink(`uploads/${profile.photo}`, () => {}); // Make sure the path is correct
    await ImageModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Profile Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
