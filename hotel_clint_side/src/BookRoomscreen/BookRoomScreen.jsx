import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loder from '../LodingComponents/Loder';
import Error from '../LodingComponents/Error';
import Navbar from "../HomeComponent/navbar";
import axios from 'axios';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


function BookRoomScreen() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("currentUser"))
    let { roomid } = useParams()
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    const [room, setroom] = useState()
    const [totalAmount, setTotalAmount] = useState()

    const fromDate = JSON.parse(localStorage.getItem("fromDate"))
    const toDate = JSON.parse(localStorage.getItem("toDate"))

    const cFromDate = moment(fromDate, 'DD-MM-YYYY')
    const cToDate = moment(toDate, 'DD-MM-YYYY')

    const totalDays = moment.duration(cToDate.diff(cFromDate)).asDays() + 1






    // console.log(fromDate)


    useEffect(() => {
        async function fetchdata() {
            try {
                setloading(true)
                const data = (await axios.post("https://hotel-website-v8cy.onrender.com/api/rooms/getroomsbyid", { roomid: roomid })).data.rooms
                // console.log(data)
                setTotalAmount(data.Rentperday * totalDays)

                setroom(data)
                // console.log(room)
                setloading(false)
            } catch (error) {
                setloading(false)
                console.log(error)
                seterror(true)
            }
        }
        fetchdata()
    }, [])



    // async function bookRoom() {


    // }



    async function onToken(token) {

        // console.log(token);

        const bookingDetails = {
            room,
            userId: (user.data.data._id),
            fromDate: fromDate,
            toDate: toDate,
            totalAmount: totalAmount,
            totalDays: totalDays,
            token


        }

        try {
            setloading(true)
            const result = await axios.post("https://hotel-website-v8cy.onrender.com/api/bookings/bookroom", bookingDetails)
            setloading(false)
            swal.fire("Congratulations", "Your Room booked successfully", "success").then(result => {
                // window.location.href = "/bookings"
                navigate("/getrooms")
            })
        } catch (error) {
            console.log(error)
            setloading(false)
            swal.fire("oops", "Somthing went wrong", "error")
        }
    }




    return (

        <div>
            {/* <navbar>
                <Navbar />
            </navbar> */}




            <div className='m-5'>
                {loading ? (<h1>{<Loder />}</h1>) : room ? (<div>

                    <div className="row  justify-content-center mt-5 bs" >
                        <div className="col-md-6">


                            <h1>{room.Name}</h1>
                            <img src={room.ImageUrls[0]} className="bigimg " />

                        </div>





                        <div className="col-md-6 ">

                            <div style={{ textAlign: "right" }}>
                                <h1>Booking Details</h1>
                                <hr />
                                <b>
                                    <p>Name: {user.data.data.Name}</p>
                                    <p>From Date :{fromDate}</p>
                                    <p>To Date :{toDate}</p>
                                    <p>Max Count : {room.MaxCount}</p>
                                </b>
                            </div>

                            <div style={{ textAlign: "right" }}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days : {totalDays} </p>
                                    <p>Rent per day : {room.Rentperday}</p>
                                    <p>Total Amount : {totalAmount} </p>
                                </b>

                            </div>

                            <div style={{ float: "right" }}>


                                <StripeCheckout
                                    amount={totalAmount * 100}
                                    token={onToken}
                                    currency='INR'

                                    stripeKey="pk_test_51NEmbvSJjbVBpx7WBWhsLrg5zrEediefEWGM5P6bc99RqqoAicHYEoh4oAjYbYlg10Uw1Cch4r5c5JBc8JXOlNYw00Mro0vnep"
                                >
                                    <button className='btn btn-primary' >Pay Now</button>

                                </StripeCheckout>


                            </div>

                        </div>

                    </div>
                </div>) : (<Error />)}
            </div>

        </div>
    );
}

export default BookRoomScreen;
