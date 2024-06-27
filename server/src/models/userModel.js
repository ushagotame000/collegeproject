import mongoose, { SchemaType } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  status: {
    type: String,
  },
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  bio: {
    type: String,
  },
  hobbies: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
