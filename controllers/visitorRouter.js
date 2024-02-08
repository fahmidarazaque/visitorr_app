const express=require("express")
const visitorModel=require("../models/visitorModel")


const router=express.Router()

router.post("/visitor_add",async(req,res)=>{
    let data=req.body
    let visitor=new visitorModel(data)
    let result=await visitor.save()
    res.json({
        status:"success"
    })
})
router.get("/visitor_view",async(req,res)=>{
    let data=await visitorModel.find()
    res.json(data)
    res.send("hello")

})
module.exports=router