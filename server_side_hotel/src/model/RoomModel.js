const  mongoose  = require("mongoose")


const RoomSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    MaxCount:{
        type:Number,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Rentperday:{
        type:Number,
        required:true
    },
    ImageUrls:[],

    CurrentBookings:[],
    type:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }


},{
    timestamps:true,
})


const RoomModel = mongoose.model("rooms",RoomSchema)

module.exports = RoomModel

