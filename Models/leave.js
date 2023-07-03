import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema

const leaveSchema = new mongoose.Schema({
    NumberOfdays:{
        type:Number,
        required:true
    },
    From:{
        type:String,
      required:true
    },
    To:{
        type:String,
        required:true
    },
    Reason:{
        type:String,
        required:true
    },
    user:{
        type : ObjectId,
        ref : "user"
    },
    Leavestatus:{
        type:String,
        required:true
    }
})
 
const  Leaves = mongoose.model("leave", leaveSchema)
export {Leaves}