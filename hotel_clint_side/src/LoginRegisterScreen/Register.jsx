import React, { useState } from 'react';
import Navbar from "../HomeComponent/navbar"
import axios from "axios"
import Error from '../LodingComponents/Error';
import Loder from '../LodingComponents/Loder';
import Success from '../LodingComponents/Success';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2" 
import { NavLink } from "react-router-dom";


function Register() {
  const navigate = useNavigate()
  const [loading , setloading] = useState(false)
  const [error , seterror] = useState()
  const [success , setsuccess ] = useState()


  const [postdata, setpostdata] = useState({Name:"",Email:"",PhoneNumber:"",Password:"",cPassword:""})

  const clear = () =>{
    setpostdata({Name:"",Email:"",PhoneNumber:"",Password:"",cPassword:""})
  }

   function handleOnChange(event) {
    const {name,value} = event.target
    // console.log(event.target.name)
    setpostdata({
      ...postdata,
      [name]:value,
    });

  }
  
  

 async function handleSubmit(event){
    event.preventDefault();
   if(postdata.Password!==postdata.cPassword){
    alert("Password not match")
   }

   else if(postdata.Password===postdata.cPassword){
       try {
        setloading(true)
        const result = await axios.post("https://hotel-website-v8cy.onrender.com/api/users/register" , postdata)
        setloading(false)
        swal.fire("Success" , 'Your Registration successfully' , "success").then(result=>{
          // window.location.reload()
          navigate("/login")
        })

        // console.log(result)
        // console.log("yash");
        clear()
        
        
       } catch (error) {
        // console.log(error);
        setloading(false)
        swal.fire("opps" , 'Somthing went wrong' , "error")
        // seterror(true)

       }
   }
    
    // clear()

  }
  return (

    <div >
     

      {loading && (<Loder/>)}
      {error && (<Error/>)}
      {/* {success && (<Success message="Registration successfully"/>)} */}
      
      <div className=' row  d-flex justify-content-center mt-5' >

        <div className='col-md-5 mt-5' >
        

          <form onSubmit={handleSubmit} className='form-control bs mt-5 tableback'>
            <h1 className='headingreg'>Regsister </h1>
            <input type="text" name="Name" required className='form-control tableback ' placeholder='Name' value={postdata.Name} onChange={handleOnChange} />
            <input type="email" name="Email" required className='form-control mt-2 tableback' placeholder='email' value={postdata.Email} onChange={handleOnChange} />
            <input type="phone" name="PhoneNumber" required className='form-control mt-2 tableback' placeholder='Mobile Number'value={postdata.PhoneNumber} onChange={handleOnChange} />
            <input type="password" name="Password" required className='form-control mt-2 tableback' placeholder='Password' value={postdata.Password} onChange={handleOnChange}/>
            <input type="password" required name="cPassword" className='form-control mt-2 tableback' placeholder=' Conform Password' value={postdata.cPassword} onChange={handleOnChange} />
            <button type='submit' className='btn btn-primary mt-3'>Submit</button>

            <br /><br />

            Already have an account  <NavLink to="/login" >Click here</NavLink> 
          </form>




        </div>

      </div>
      
    </div>
  );
}

export default Register;
