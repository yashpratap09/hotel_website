import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loder from '../LodingComponents/Loder';
import Error from '../LodingComponents/Error';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function AdminScreen() {
    
    const navigate = useNavigate()
    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem("currentUser")).data.data.isAdmin){
            // window.location.href = "/"
            navigate("/")
        }

    },[])


    const items = [
        {
            key: '1',
            label: `Bookings`,
            children: Bookings(),
        },
        {
            key: '2',
            label: `Rooms`,
            children: Rooms(),
        },
        {
            key: '3',
            label: `Add Room`,
            children: AddRooms(),
        },
        {
            key: '4',
            label: `Users`,
            children: Users(),
        }
    ];
    return (
        <div className='mt-3 ml-3 mr-3 bs'>
            <h1 className='text-center'><b>Admin panal</b></h1>

            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
}

export default AdminScreen;




export function Bookings() {

    const [bookings, setBookings] = useState([])
    const [loading, setloading] = useState(true)
  const [error, seterror] = useState()
    

    useEffect(() => {
        forData()
        async function forData() {
            try {
                const data = await axios.get("https://hotel-website-v8cy.onrender.com/api/bookings/getallbookings")

                // console.log(data)
                setBookings(data.data)
                setloading(false)

            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(error)

            }
        }

    }, []);


    return (
        <div className='row'>

            <div className="col-md-12">
                <h1>Bookings</h1>
                {loading && (<Loder/>)}

                <table className='table table-bordered table-dark'>
                    <thead className="bs ">
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                    {bookings.length && (bookings.map(bookings=>{
                        return <tr key={bookings._id}>
                            <td> {bookings._id} </td>
                            <td> {bookings.userId} </td>
                            <td> {bookings.roomId} </td>
                            <td> {bookings.fromDate} </td>
                            <td> {bookings.toDate} </td>
                            <td> {bookings.status} </td>
                        </tr>
                    })) }
                    </tbody>
                </table>




               


            </div>

        </div>
    );
}





export function Rooms() {

    const [rooms, setRooms] = useState([])
    const [loading, setloading] = useState(true)
  const [error, seterror] = useState()
    

    useEffect(() => {
        forData()
        async function forData() {
            try {
                const data = await axios.get("https://hotel-website-v8cy.onrender.com/api/rooms/getallrooms")

                // console.log(data)
                setRooms(data.data.rooms)
                setloading(false)

            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(error)

            }
        }

    }, []);


    return (
        <div className='row'>

            <div className="col-md-12">
                <h1>Rooms</h1>
                {loading && (<Loder/>)}

                <table className='table table-bordered table-dark'>
                    <thead className="bs ">
                        <tr>
                            <th>Room Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent per day</th>
                            <th>max Count</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>

                    <tbody>
                    {rooms.length && (rooms.map(room=>{
                        return   <tr key={room._id}>
                            <td> {room._id} </td>
                            <td> {room.Name} </td>
                            <td> {room.type} </td>
                            <td> {room.Rentperday} </td>
                            <td> {room.MaxCount} </td>
                            <td> {room.PhoneNumber} </td>
                        </tr>
                    })) }
                    </tbody>
                </table>




               


            </div>

        </div>
    );
}


export function Users() {
    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()


    useEffect(() => {
        forData()
        async function forData() {
            try {
                const data = await axios.get("https://hotel-website-v8cy.onrender.com/api/users/getallusers")

                // console.log(data)
                 setUsers(data.data)
                setloading(false)

            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(error)

            }

           
        }

    }, []);



    return(
        <div className='row'>
            <div className='col-md-12'>
                <h1>Users</h1>
                {loading && (<Loder/>)}

                <table className='table table-bordered table-dark'>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users && (users.map(user =>{
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.isAdmin ?"Yes":"No"}</td>
                            </tr>
                        }))}

                    </tbody>
                </table>



            </div>
        </div>
    )

  
}






export  function AddRooms() {

    const [Name,setName] = useState("")
    const[Rentperday , setRentperday] = useState("")
    const[MaxCount , setMaxCount] = useState("")
    const[Description , setDescription] = useState("")
    const[PhoneNumber , setPhoneNumber] = useState("")
    const[type , setType] = useState("")
    const[image1 , setImage1] = useState()
    const[image2 , setImage2] = useState()
    const[image3 , setImage3] = useState()

    const [loading, setloading] = useState(false)
  const [error, seterror] = useState()


   async function AddRoom(){


       if(!Name ){
       return alert("name is required")
       } 

       if(!Rentperday ){
        return alert("Rentperday is required")
        }

        if(!MaxCount ){
            return alert("MaxCount is required")
            }

            if(!Description ){
                return alert("Description is required")
                }


                if(!PhoneNumber ){
                    return alert("PhoneNumber is required")
                    }

                    if(PhoneNumber.length !== 10 ){
                        return alert("Provied a valid Number")
                    }
                    
                    
                    if(!type ){
                        return alert("type is required")
                        }
                        
                        


                        if(!image1 ){
                            return alert("image1 is required")
                            }
                        if(!image2 ){
                            return alert("image2 is required")
                            }
                        if(!image3 ){
                            return alert("image3 is required")
                            }




 
        const newRoom = {
            Name, Rentperday ,MaxCount , Description , PhoneNumber ,type , 
            ImageUrls : [ image1 ,image2, image3]
        }

        try {
            setloading(true)
            const result = await axios.post("https://hotel-website-v8cy.onrender.com/api/rooms/addroom" , newRoom)
            console.log(result.data);
            setloading(false)
            Swal.fire("Congrats" , 'Your New Room Added Successfully'  , "success").then(result=>{
                // window.location.href = "/"
                navigate("/")
            })
        } catch (error) {
            console.log(error);
            setloading(false)
            Swal.fire("Opps" ,"Something went wrong" , "error")
        }


    }

    

  return (
    <div className='row'>
      <div className="col-md-5">
        <input type="text" className='form-control' placeholder='room Name' 
        value={Name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="number" className='form-control' placeholder='rent par day' 
        value={Rentperday} onChange={(e)=>{setRentperday(e.target.value)}} />
        <input type="number" className='form-control' placeholder='max count' 
         value={MaxCount} onChange={(e)=>{setMaxCount(e.target.value)}}/>
       
        <input type="text" className='form-control' placeholder='Description' 
         value={Description} onChange={(e)=>{setDescription(e.target.value)}}/>

        <input type="number" className='form-control' placeholder='Phone number' 
         value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
      </div>

      <div className="col-md-5">

      <input type="text" className='form-control' placeholder='type' 
       value={type} onChange={(e)=>{setType(e.target.value)}}/>
        <input type="text" className='form-control' placeholder='Image URL 1' 
         value={image1} onChange={(e)=>{setImage1(e.target.value)}}/>
        <input type="text" className='form-control' placeholder='Image URL 2' 
         value={image2} onChange={(e)=>{setImage2(e.target.value)}}/>
        <input type="text" className='form-control' placeholder='Image URL 3' 
         value={image3} onChange={(e)=>{setImage3(e.target.value)}}/>
        

        <div className="text-right">
            <button className='btn btn-primary mt-2 ' onClick={AddRoom}> Add Room</button>
        </div>



      </div>
    </div>
  );
}



