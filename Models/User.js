import mongoose from "mongoose";

const userScmema = new mongoose.Schema({
    name:{
        type:"String", 
        required : [true,"Please Enter Your Name"]
    },
    email:{
        type:"String", 
        unique:true,
        required : [true,"Please Enter Your Email Address"]
    }, 
    password:{
        type:"String",  
        required : [true,"Please Enter Your Password"]
    }, 
    createdAt:{
        type: Date,
        default: Date.now(),
    },
})

export const User = new mongoose.model('User',userScmema);
