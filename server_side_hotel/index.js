const express = require("express");
const mongoose = require("mongoose")
const cors  = require("cors")
require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true})
.then(()=>console.log("mongodb is connected"))
.catch((error)=>console.log(error))

const RoomRoute = require("./src/routes/RoomRoute")
const userRoute = require('./src/routes/userRoute')
const bookingRoute = require('./src/routes/bookingsRoutes')

app.use("/api/rooms" , RoomRoute)
app.use("/api/users" , userRoute)
app.use("/api/bookings", bookingRoute)








const PORT = process.env.PORT ;

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
