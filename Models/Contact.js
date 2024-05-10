import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:[true,"Please Enter Contact Name"]
    },
    phone:{
        type:"String",
        required:[true,"Please Enter Contact Phone No"]
    },
    profession:{
        type:"String",
        required:[true,"Please Enter Contact Profession"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
});

export const Contact = mongoose.model('Contact',contactSchema)