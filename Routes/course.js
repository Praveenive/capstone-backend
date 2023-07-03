import express from "express"
import { Course } from "../Models/courses.js"

const router = express.Router()

router.post("/addcourse", async(req,res)=>{
    try {
        const addcourse = await new Course({
            ...req.body,Enrolled:"1030 Developers"
        }).save()
        if(!addcourse){
            return res.status(400).json({message:"Course not found"})
        }
        res.status(200).json({data:addcourse,message:"Course added successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Sever error"})
    }
})

router.get("/getcourse", async(req,res)=>{
    try {
        const data = await Course.find()
        if(!data){
            return res.status(400).json({message:"Courses not found"})
        }
        res.status(200).json({data:data,message:"Courses list"})
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
})

export const courseRouter = router

