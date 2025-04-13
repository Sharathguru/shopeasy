const express =require("express")
const app=express()

const PORT =process.env.PORT || 3000;


app.get("/",(req,res,next)=>{
    res.send("welcome to shopEasy from JVLcode!")
})

app.listen(PORT,()=>{
    console.log(`Server os running on port ${PORT}`);
})