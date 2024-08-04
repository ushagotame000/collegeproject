import express from "express";
import multer from 'multer'
import { addToProfile,updateProfile,listProfile,removeProfile } from "../controllers/profileController";

const profileRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueSuffix);
    },
  });
  
  // Initialize upload variable
  const upload = multer({ storage: storage });
  
  // Route multer
  profileRouter.post("/add", upload.single("image"), addToProfile);
  profileRouter.post("/update", updateProfile);
  profileRouter.post("/remove", removeProfile);
  profileRouter.get("/list", listProfile);
  
  export default profileRouter;
