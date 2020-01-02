import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports= mongoose.model("Contact", contactSchema)