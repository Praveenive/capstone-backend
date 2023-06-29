import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true,
        unique:true
    },
    frontend_sourcecode:{
        type:String,
        required:true
    },
    backend_sourcecode:{
        type:String,
        required:true
    }
})

 const Tasks = mongoose.model("task",taskSchema)
 export { Tasks }
