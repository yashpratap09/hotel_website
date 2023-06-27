import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import Loder from '../LodingComponents/Loder';
import Error from '../LodingComponents/Error';
import swal from "sweetalert2" 
import { Tag } from 'antd';
import { useNavigate } from "react-router-dom";




export default function ProfileScreen() {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("currentUser")).data.data

  useEffect(() => {
    if(!user){
      // window.location.href="/login"
      navigate("/login")
    }
  }, []);


    // const onChange = (key) => {
    //     console.log(key);
    //   };

    const items = [
        {
          key: '1',
          label: <div> <h1>My Profile</h1></div>,
          children: MyProfile(),
        },
        {
          key: '2',
          label: <div> <h1>Bookings</h1></div>,
          children: MyBookings(),
        },
       
      ];


  return (
    <div>
      <Tabs className='ml-3 mt-3' defaultActiveKey="1" items={items}  />   
    </div>
  );
}





 



export  function  MyBookings() {

  const user = JSON.parse(localStorage.getItem("currentUser")).data.data
  const [bookings , setBookings] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState()





  useEffect (  () => {
    const user = JSON.parse(localStorage.getItem("currentUser")).data.data

   
    fordata()
    async function fordata(){
      try {
        setloading(true)
        const rooms = await   axios.post("https://hotel-website-v8cy.onrender.com/api/bookings/getbookingsbyuserid", {userid : user._id} )
        setBookings(rooms.data)
        console.log(bookings)
       setloading(false)
       
        
       } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)  
       }
     }
  },[]);


 async function CancelBooking(bookingId,roomId){

  // console.log(bookingId);
  // console.log(roomId);
  

  try {
    setloading(true)

    const result = await axios.post("https://hotel-website-v8cy.onrender.com/api/bookings/cancelbooking",{bookingId:bookingId,roomId:roomId})

    console.log(result.data);
    setloading(false)
    swal.fire("Congrats" , "Your booking has been cancelled" , "success").then(result=>{
      // window.location.reload()
      navigate(0)
    })

    
  } catch (error) {
    console.log(error);
    setloading(false)
    swal.fire("opps" , "Somthing went wrong" , "error")
  }


  }
  
  return (
    <div>

      <div className='row'>
        <div className="col-md-6">

          

          {loading && (<Loder/>)}
          {bookings.length==0 && <div style={{fontSize:"20px"}} >No Bookings Are Available</div>}
          {bookings && (bookings.map(bookings=>{
          return  <div key={bookings._id} className='bs' >

              <h1>{bookings.room}</h1><br/>
              <p><b>BookingId</b> : {bookings._id}</p>
              <p> <b>CheckIn</b> : {bookings.fromDate} </p>
              <p> <b>CheckOut</b> : {bookings.toDate} </p>
              <p> <b>Total Amount</b> : {bookings.totalAmount} </p>
              <p> <b>Status</b> : {bookings.status == 'booked' ?  <Tag color="green">CONFIRMED</Tag> : <Tag color="red">CANCELLED</Tag>} </p>

             
             {bookings.status !== "cancelled" && (
               <div style={{float:"right"}} >
               <button className='btn btn-primary' onClick={()=>{CancelBooking(bookings._id,bookings.roomId)}} > CANCEL BOOKING </button>

             </div>
             )}

             <br />
             <br />

            </div>
          }))}



        </div>
      </div>
     

    </div>
  );
}





export  function MyProfile() {
  // console.log(user)
  const user = JSON.parse(localStorage.getItem("currentUser")).data.data
  return (
    <div className='bs'>
      <h1>  My Profile </h1>
      
      <br/>
      

      <p> <b>Name</b> : {user.Name} </p>
      

      <p> <b>Email</b> : {user.Email} </p>
     
      <p> <b>isAdmin</b> : {user.isAdmin ? "Yes" : "No"} </p>
      
    </div>
  );
}

