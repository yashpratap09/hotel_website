
import React,{useState,useEffect} from "react";
import axios from "axios"
import Navbar from "../HomeComponent/navbar";
import RoomsDetails from "./RoomsDetails";
import Loder from "../LodingComponents/Loder";
import Error from "../LodingComponents/Error";
import moment from "moment";
import { DatePicker ,Space } from 'antd';
import { useNavigate } from "react-router-dom";


export default function GetRooms(){
    const navigate = useNavigate()

    // localStorage.setItem("fromDate",JSON.stringify("  select Date"))
    // localStorage.setItem("toDate",JSON.stringify("  select Date"))

    const [Loading , setLoading] = useState();
    const [Rooms, setRooms] = useState([]);
    const [error,setError] = useState();
    const { RangePicker } = DatePicker;
    const [showBookB, setShowBookB] = useState(false);
    const [duplicateRooms,setduplicateRooms] =  useState([]);

    const [searchKey , setSearchkey] = useState("");
    const [type , setType] = useState("");


    // const [fromDate , setfromDate] = useState("")
    // const [toDate , setToDate] = useState("")


    

    

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("currentUser"))
       
            if(!user){
            //   window.location.href="/login"
            navigate("/login")
            }else{

                async function fetchData() {
                    try {
                       
                    setLoading(true)
                     const response = await axios.get("https://hotel-website-v8cy.onrender.com/api/rooms/getallrooms")
                     //  console.log(response.data.rooms)
                       setRooms(response.data.rooms)
                       setduplicateRooms(response.data.rooms)
                     //  console.log(Rooms)
                       setLoading(false)
           
                   } catch (error) {
                       setError(true)
                     //  console.log(error+"cfvdf")
                       console.log(error)
                       setLoading(false)
                   }
                     
                     
                   }
                   localStorage.setItem("fromDate",JSON.stringify(""))
               localStorage.setItem("toDate",JSON.stringify(""))
                   fetchData();



            }
         




        
      },[]);
//console.log(Rooms)

function filterByDate(dates){
    // console.log(moment(dates[0]).format("DD-MM-YYYY"));
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));

    //  setfromDate((dates[0]).format("DD-MM-YYYY"))
    //  setToDate((dates[1]).format("DD-MM-YYYY"))
    // console.log(dates[0].format("DD-MM-YYYY"))

    localStorage.setItem("fromDate",JSON.stringify((dates[0]).format("DD-MM-YYYY")))
    localStorage.setItem("toDate",JSON.stringify((dates[1]).format("DD-MM-YYYY")))
    setShowBookB(true)

    var temprooms = []
    var availblity = false
    const fromDate = JSON.parse(localStorage.getItem("fromDate"))
    const toDate = JSON.parse(localStorage.getItem("toDate"))

    const cFromDate = moment(fromDate,'DD-MM-YYYY')
    const cToDate = moment(toDate,'DD-MM-YYYY')


    for(const Rooms of duplicateRooms)
    {
        if(Rooms.CurrentBookings.length>0){

            // var myDate = new Date("10-12-2023");
            //  var result = myDate.getTime();
            //  console.log(result);
            
            
            for( const booking of Rooms.CurrentBookings){



                if(!moment((moment(booking.fromDate,'DD-MM-YYYY'))).isBetween( moment(cFromDate), moment(cToDate))
                && 
               !moment((moment(booking.toDate,'DD-MM-YYYY'))).isBetween( moment(cFromDate), moment(cToDate)) &&
               (!moment(moment(cFromDate)).isBetween( (moment(booking.fromDate,'DD-MM-YYYY')), (moment(booking.toDate,'DD-MM-YYYY')))
                  && 
                !moment(moment(cToDate)).isBetween( (moment(booking.fromDate,'DD-MM-YYYY')), (moment(booking.toDate,'DD-MM-YYYY'))) )
                )









                // if(!moment(moment(cFromDate)).isBetween( (moment(booking.fromDate,'DD-MM-YYYY')), (moment(booking.toDate,'DD-MM-YYYY')))
                //  && 
                // !moment(moment(cToDate)).isBetween( (moment(booking.fromDate,'DD-MM-YYYY')), (moment(booking.toDate,'DD-MM-YYYY'))) )
                {

                    // var y= (new Date(cFromDate));
                    //  console.log(moment(cFromDate))
                    // console.log( (moment(booking.fromDate,'DD-MM-YYYY')));

                    


                    if(cFromDate !== (moment(booking.fromDate,'DD-MM-YYYY'))
                    && cFromDate !==  (moment(booking.toDate,'DD-MM-YYYY')) //booking.toDate
                    && cToDate !==  (moment(booking.fromDate,'DD-MM-YYYY')) //booking.fromDate
                    && cToDate !==  (moment(booking.toDate,'DD-MM-YYYY')) //booking.toDate
                          ){
                            //  console.log(Rooms)
                            availblity = true
                          }

                }
            }

        }

        if(availblity ==true || Rooms.CurrentBookings.length ==0){
            // console.log(Rooms)
            temprooms.push(Rooms)
        }

        setRooms(temprooms)


    }


    



}


function filterBySearch(){

    const temprooms = duplicateRooms.filter(room=>room.Name.toLowerCase().includes(searchKey.toLowerCase()))
    setRooms(temprooms)
    
}
function filterByType(e){

    setType(e)

    if(e!=="all"){
        const temprooms = duplicateRooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())
    setRooms(temprooms)
    }else(
        // console.log('sssss')
         setRooms(duplicateRooms)
    )
    
}
// console.log(fromDate)
// console.log(toDate)
     

    return (
        <div>
            
           

          <div className="container">


          <div className="row mt-4  bs">
         <div className="col-md-4">
         {/* <RangePicker format='DD-MM-YYYY' onChange={filterByDate} /> */}

         <Space direction="horizontal" size={0}>  <RangePicker format='DD-MM-YYYY'  onChange={filterByDate} onClick={(triggerNode) => {
          return triggerNode.parentNode }}    getPopupContainer={(triggerNode) => {
          return triggerNode.parentNode }} />   </Space>

         
         </div> <br />
         <br />

         <div className="col-md-4">
            <input type="text" className="form-control" placeholder="search rooms" 
            value={searchKey} onChange={(e)=>{
                setSearchkey(e.target.value)
            }} onKeyUp={filterBySearch}/>
         </div>
         <br /><br />
         

        <div className="col-md-4">
        <select   className=" form-control" value={type} onChange={(e)=>{
           filterByType(e.target.value)
        }}>
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-delux</option>
         </select>
        </div>
        
          
        </div>




            <div className="row justify-content-center mt-5">
            {Loading ? (<h1>{<Loder/>}</h1>):(Rooms.map((room,index)=>{    //1
                return <div key={index} className="col-md-9 mt-2">

{/* fromDate={fromDate} toDate= {toDate} */}
                  
                    <RoomsDetails room={room}   /> 

                </div>
            }))}
            </div>

            {/* <div className="row justify-content-center mt-5">
            {Loading ? (<h1>{<Loder/>}</h1>):error?(<Error/>):(Rooms.map((room)=>{
                return <div className="col-md-9 mt-2">
                  
                    <RoomsDetails room={room}/>

                </div>
            }))}
            </div> */}

            </div>

            
            
        </div>
    )




}