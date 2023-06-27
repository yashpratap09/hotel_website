const express = require("express")
const router = express.Router()
const bookingModel = require('../model/booking')
const RoomModel = require("../model/RoomModel")
const stripe = require("stripe")('sk_test_51NEmbvSJjbVBpx7WHcJ0nFiXVLKMm6EyJWvOxz6JLzLCv0jRsXIkhSPtg6UfcNDhXzpwFB34EAN3kl1Q4WpQDCEO00VYK8McA8')
const { v4: uuidv4 } = require('uuid');


router.post("/bookroom", async (req, res) => {

    try {
        
    

    const {
        room,
        userId,
        fromDate,
        toDate,
        totalAmount,
        totalDays,
        token } = req.body

        // console.log(token.card.id);

        


    




        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
            
        })

        

        if(customer){

        

            const paymentIntent = await stripe.paymentIntents.create({

                amount: totalAmount * 100,
                currency: 'INR',
                payment_method: 'pm_card_visa',
              });





            if(paymentIntent){


                         const newBooking = new bookingModel({
                    room: room.Name,
                    roomId: room._id, fromDate,
                    toDate,
                    totalAmount,
                    totalDays,
                    userId,
                    transactionId: "1234"


                })

                const booking = await newBooking.save()

                const changeRoomData = await RoomModel.findOne({ _id: room._id })

                changeRoomData.CurrentBookings.push({ bookingId: booking._id, fromDate: fromDate, toDate: toDate, userId: userId, status: booking.status })

                await changeRoomData.save()

               



                
            }
        }



        res.send("Payment successfull, your Room is booked")
       
        
        
      

    // const payment = await stripe.charges.create({
    //         amount: totalAmount * 100,
    //         customer: customer.id,
    //         currency: "INR",
    //         receipt_email: token.email,
    //           card:token.card.id

    //     }
    //     , {
    //     idempotencykey: uuidv4()
    // }
    // )

    //  console.log("yyyy")


        

        

        // if (createCharge) {

           
        //         const newBooking = new bookingModel({
        //             room: room.Name,
        //             roomId: room._id, fromDate,
        //             toDate,
        //             totalAmount,
        //             totalDays,
        //             userId,
        //             transactionId: "1234"


        //         })

        //         const booking = await newBooking.save()

        //         const changeRoomData = await RoomModel.findOne({ _id: room._id })

        //         changeRoomData.CurrentBookings.push({ bookingId: booking._id, fromDate: fromDate, toDate: toDate, userId: userId, status: booking.status })

        //         await changeRoomData.save()

        //         return res.status(200).json("Room booked successfully")
           

        // }


       
    




    } catch (error) {
        console.log(error)
    }



})

router.post("/getbookingsbyuserid", async (req,res) =>{

    const  userid = (req.body.userid)
    // console.log(userid)

    try {
        const bookings =  await bookingModel.find({userId : userid})
        res.send(bookings)
        // console.log(bookings)
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.post("/cancelbooking",async (req,res)=>{
    const {bookingId,roomId}=req.body
    // console.log(bookingId);

    try {
        const bookingItems = await bookingModel.findOne({_id:bookingId})

        bookingItems.status = "cancelled"

      await  bookingItems.save()

        const room = await RoomModel.findOne({_id:roomId})

        const bookings = room.CurrentBookings

        const temp = bookings.filter(booking =>{booking.bookingId.toString()!==bookingId})

        room.CurrentBookings = temp

        await room.save()


        res.send("Your booking canceled successfully")



    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }


})


router.get("/getallbookings" , async (req,res)=>{


    try {
        const bookings = await bookingModel.find()
        res.send(bookings)
        
    } catch (error) {
        res.status(400).json({error})
    }
})


module.exports = router