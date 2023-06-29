
import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;

const querySchema = new mongoose.Schema({
    Topic:{
        type:String,
        required :true
    },
    PreferedLanguage:{
        type:String,
        required:true
    },
    QueryTitle:{
        type:String,
        required:true
    },
    Querydescription:{
        type:String,
        required:true
    },
    AvailableTimeslots:{
        type:String,
        format:"time",
        reqiured:true
    },
    user:{
        type : ObjectId,
        ref : "user"
    }
})

const Queries = mongoose.model("queries",querySchema)
export {Queries}