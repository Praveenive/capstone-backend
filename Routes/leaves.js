import express  from "express";
import { Leaves } from "../Models/leave.js";

const router = express.Router()

router.post("/add", async(req,res)=>{
    try {
        const leave = await new Leaves({
            ...req.body,user:req.user._id,Leavestatus:"Pending"
        }).save()
        if(!leave){
            return res.status(400).json({message:"Leaves not found"})
        }
        res.status(200).json({data:leave,message:"Your leave created succesfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})

router.get("/myleaves", async(req,res)=>{
    try {
        const leave = await Leaves.find({user:req.user._id})
        console.log(leave)
        if(!leave){
            return res.status(400).json({message:"Leaves Not found"})
        }
        res.status(200).json({data:leave,message:"Your leaves"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
})

router.get("/allleaves", async(req,res)=>{
    try {
        const leave = await Leaves.find()
        if(!leave){
            return res.status(400).json({message:"Leaves not found"})
        }
      res.status(200).json({data:leave,message:"All leaves"})        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
})

router.put("/leavestatus/:id" , async(req,res)=>{
    try {
         const update = await Leaves.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
         )
         if(!update){
            return res.status(400).json({message:"Leave status still pending"})
         }
        res.status(200).json({data:update,message:"Leave status updated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
})

export const leaveRouter =router