import express from 'express'
import { User } from '../Models/users.js'

const router = express.Router()

router.get("/allstudents", async(req,res)=>{
    try {
        const student = await User.find({typeofuser:"student"});
        if(!student){
            return res.status(400).json({message:"Students NOt found"})
        }
        res.status(200).json({data:student,message:"Student list"})
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

router.put("/assign-batch:id" ,async(req,res)=>{
    try {
        const batchassigning = await User.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
        )
        if(!batchassigning){
            return res.status(400).json({message:"Error Occuring"})
        }
        res.status(200).json({data:batchassigning,message:"Batch assigned succesfully"})
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

export const studentRouter = router