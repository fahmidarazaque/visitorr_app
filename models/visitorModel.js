const mongoose=require("mongoose")

const visitorSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phoneno:String,
        date:String
    }
)
module.exports=mongoose.model("visitor",visitorSchema)