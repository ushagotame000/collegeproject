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
  contacts: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
const User = mongoose.model("User", userSchema);
export default User;
