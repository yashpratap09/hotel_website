const express = require("express")
const router = express.Router();
const RoomModel = require("../model/RoomModel")



router.post("/addroom", async function (req,res){
    try {
        // let data = req.body
        // const CreataRoom = await RoomModel.create(data)
        // return res.status(201).json(CreataRoom)

        const newroom = new RoomModel(req.body)
        await newroom.save()

        res.send("New Room Added Successfully")
        
    } catch (error) {
      return  res.status(500).json({message:error.message}) 
    }
})

router.get("/getallrooms", async (req,res)=>{
try {
    const rooms = await RoomModel.find({})
return res.status(200).json({rooms})
} catch (error) {
   return res.status(500).json({message:error })
}
});

module.exports = router


router.post("/getroomsbyid", async (req,res)=>{
    try {
        const roomid = req.body.roomid
        const rooms = await RoomModel.findOne({_id:roomid})
    return res.status(200).json({rooms})
    } catch (error) {
       return res.status(500).json({message:error })
    }
    });


    
    
    module.exports = router
