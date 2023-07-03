import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskLanguage:{
        type:String,
        required:true
    },
    taskname:{
        type:String,
        required:true,
        unique:true
    },
    deadline:{
        type:String,
        required:true
    }
})

 const Tasks = mongoose.model("task",taskSchema)
 export { Tasks }
