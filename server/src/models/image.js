import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
 photoUrl: String,
  photo: String,
  userName:String,
  bio: String,
  dob: String,
  hobbies:String,
  // uploadDate: { type: Date, defualt: Date.now },
});

const Image = mongoose.model("Image", imageSchema, "images");
export default Image;
