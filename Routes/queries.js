import express from 'express'
import { Queries } from '../Models/queries.js'

const router = express.Router()

router.post("/createquery" , async(req,res)=>{
    try {
        const queries = await new Queries({
            ...req.body,user:req.user._id,Querystatus:"Not Assigned"
        }).save()
    console.log(queries)
        if(!queries){
            res.status(400).json({message:"Validation failed"})
        }
        res.status(200).json({data:queries,message:"Query Raised Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues try aftersometime"})
    }
})

router.get("/myquery", async(req,res)=>{
    try {
        const query = await Queries.find({user:req.user._id})
        if(!query){
            res.status(400).json({message:"Query Not Found"})
        }
        res.status(202).json({data:query,message:"Your query Listed Out"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error try after someimes"})
    }
})

router.get("/allqueries", async(req,res)=>{
    try {
        const allqueries = await Queries.find();
        if(!allqueries){
            return res.status(400).json({message:"Queries not found"})
        }
        res.status(200).json({data:allqueries,message:"Queries List"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.put("/editquery/:id", async(req,res)=>{
    try {
        const updateQuery = await Queries.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
        )
        console.log(updateQuery)
        if(!updateQuery){
            return res.status(400).json({message:"Query Not found"})
        }
        res.status(200).json({data:updateQuery,message:"Query Updated succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})

export const queryRouter = router