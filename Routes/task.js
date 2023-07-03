import  express  from "express";
import { Tasks } from "../Models/task.js";

const router = express.Router()


router.post("/uploadtask", async(req,res)=>{
    try {
        const task = await new Tasks({
            ...req.body
        }).save()
        console.log(task)
        if(!task){
            res.status(404).json({message:"Error while Create Task"})
        }
        res.status(200).json({data:task,message:"Task Created"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
})


router.get("/viewtasks", async(req,res)=>{
    try {
        const tasks = await Tasks.find()
        if(!tasks){
            return res.status(400).json({message:"Tasks not found"})
        }
        res.status(200).json({data:tasks,message:"Tasks list"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})

export const taskRouter = router