import { User } from "../Models/User.js";
import bcrypt from 'bcrypt'
import { createCookie } from "../Utils/feature.js";

// ============ Create User ============

export const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                success: false,
                message: "User Already Exists 😖"
            })
        }
        const hashPass = await bcrypt.hash(password, 10)
        user = await User.create({ name, email, password: hashPass })
        res.status(201).json({
            success: true,
            message: "User Created Successfully ✔️",
            user
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ Login User ============

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Saale Fake Id Deta hai 🤣"
            })
        }
        const isPass = await bcrypt.compare(password, user.password)
        if (!isPass) {
            return res.status(404).json({
                success: false,
                message: "Saale Fake Id Deta hai 🤣"
            })
        }
        createCookie(res, user)
    } catch (error) {
        console.log(error);
    }
}

// ============ User Profile ============

export const userProfile = async (req, res, next) => {
    try {
        res.status(202).json({
            success: true,
            user : req.user
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ Logout User ============

export const userLogout = async (req, res, next) => {
    try {
        res.status(200).cookie('token','',{
            httpOnly: false,
            maxAge: new Date(Date.now())
        }).json({
            success: true,
            message:"Logout Successfully ✔️"
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ Update User ============

export const updateUser = async (req, res, next) => {
    try {
        const { name, email } = req.body; 
        if(name == null || email == null){
            return res.status(404).json({
                success:true,
                message:"Please Fill Name And Email ❌"
            })
        }  
        const user = await User.findByIdAndUpdate({'_id':req.user._id},{$set:{ name, email}})
        res.status(201).json({
            success: true,
            message: "Profile Updated Successfully ✔️",
            user
        })
    } catch (error) {
        console.log(error);
    }
}