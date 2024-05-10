import { Contact } from "../Models/Contact.js";
import { User } from "../Models/User.js";

// ============ Create Contact ============

export const createContact = async (req, res, next) => {
    try {
        const { name, phone, profession } = req.body;
        let contact = await Contact.findOne({ phone });
        if (contact) {
            return res.status(401).json({
                success: false, message: "Contact Exists Already"
            })
        } 
        contact = await Contact.create({ name, phone, profession,user:req.body.id });
        res.status(201).json({
            success: true, message: "Contact Created Successfully ✔️",contact
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ User All Contacts ============

export const userContacts = async(req,res,next)=>{
    try {
        const currUser = req.body.id; 
        const contacts = await Contact.find({name:req.body.id});
        res.status(200).json({
            success:true,
            message:`${contacts.length} Contacts Finds Here`,
            contacts, 
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ View Single Contact ============

export const viewContact = async(req,res,next)=>{
    try {  
        const contacts = await Contact.findById(req.body.id);
        res.status(200).json({
            success:true, 
            contacts, 
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ Update Contact ============

export const updateContact = async(req,res,next)=>{
    try {  
        const {name,phone,profession} = req.body;
        const contacts = await Contact.findByIdAndUpdate(req.body.id,{$set:{name,phone,profession}},{new:true,runValidators:true,useFindAndModify:false});
        res.status(200).json({
            success:true, 
            message:"Contact Updated Successfully ✔️",
            contacts, 
        })
    } catch (error) {
        console.log(error);
    }
}

// ============ Delete Contact ============

export const deleteContact = async(req,res,next)=>{
    try {   
        let contacts = await Contact.findById(req.body.id);
        if(!contacts){
            return res.status(404).json({
                success:false,
                message:"Invalid Contact Id"
            })
        }
        contacts = await Contact.findByIdAndDelete(req.body.id);
        res.status(200).json({
            success:true, 
            message:"Contact Deleted Successfully ✔️",
            contacts, 
        })
    } catch (error) {
        console.log(error);
    }
}