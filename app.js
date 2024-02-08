const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const visitorRoutes=require("./controllers/visitorRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fahmida123:fahmida123@cluster0.qw5qvsl.mongodb.net/visitorDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/visitor",visitorRoutes)

app.listen(3007,()=>{
    console.log("server running")
})