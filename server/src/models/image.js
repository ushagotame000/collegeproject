import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  uploadDate: { type: Date, defualt: Date.now },
});

const Image = mongoose.model("Image", imageSchema, "images");
export default Image;
