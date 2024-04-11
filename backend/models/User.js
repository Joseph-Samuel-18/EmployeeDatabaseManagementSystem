import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    empName:{
        type:String,
        required:true
    },
        empAge:{
        type:Number,
        required:true
    }, 
       empState:{
        type:String,
        required:true
    },
        empNo:{
        type:Number,
        required:true
    }
},{timestamps:true})


const usermodel= mongoose.model('user',userSchema)

export default usermodel