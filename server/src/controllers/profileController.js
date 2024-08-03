import User from "../models/userModel.js";

export const addToProfile = async(req, res)=>{
    try{
    }
    catch(error){
        res.status(500).json({message: error.message})
        }
};

export const updateProfile = async(req, res)=>{
    try{

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}