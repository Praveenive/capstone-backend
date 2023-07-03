import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
        unique:true
    },
    coursename:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    courseduration:{
        type:String,
        required:true
    }
})

const Course = mongoose.model("course",courseSchema)
export {Course}
