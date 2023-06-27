const express = require("express")
const router = express.Router();
const userModel = require("../model/user")

router.post("/register" , async function(req,res){
    const newuser = new userModel(req.body)

    try {
        const user = await newuser.save()
        return res.status(200).json({message:"user Registerd successfully" , data:user})
    } catch (error) {
        return res.status(500).json({message:error })
    }
})


router.post("/login" , async function(req,res){
    const {Email,Password} = req.body

    try {
        const user = await userModel.findOne({Email:Email,Password:Password})
        if(user){
            return res.status(200).json({message:"user Login successfully" , data:user})
        }else{
            return res.status(400).json({message:"user Not Found"})
        }
       
    } catch (error) {
        return res.status(500).json({message:error })
    }

})

router.get("/getallusers" ,async (req,res)=>{

    try {
        const users = await userModel.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({error})
    }

})


module.exports=router