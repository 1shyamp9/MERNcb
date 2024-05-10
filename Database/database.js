import mongoose from "mongoose";

export const DB = mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName:"MERNcb"
}).then((c)=>{
    console.log(`Database is Connected ${c.connection.host}`);
}).catch((e)=>{console.log(e);})