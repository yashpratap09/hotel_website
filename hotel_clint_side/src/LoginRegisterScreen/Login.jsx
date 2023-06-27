import React, { useState } from 'react';
import "./Login.css"
import Navbar from "../HomeComponent/navbar"
import axios from 'axios';
import Loder from '../LodingComponents/Loder';
import Error from '../LodingComponents/Error';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()

  const [postdata, setpostdata] = useState({ Email: "", Password: "" })

  const clear = () => {
    setpostdata({ Email: "", Password: "" })
  }

  function handleOnChange(event) {
    const { name, value } = event.target
    // console.log(event.target.name)
    setpostdata({
      ...postdata,
      [name]: value,
    });

  }



  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setloading(true)
      const result = await axios.post('http://localhost:5000/api/users/login', postdata)
      setloading(false)

      localStorage.setItem("currentUser", JSON.stringify(result))
      // window.location.href = "/"
      navigate("/")

      console.log(result)
    } catch (error) {
      console.log(error);
      setloading(false)
      seterror(true)
    }



    // clear()

  }
  return (

    <div  >


      {loading && (<Loder />)}

      <div className=' row  d-flex justify-content-center mt-5' >

        <div className='col-md-5 mt-5' >
          {error && (<Error message="Invalid data/Invalid credential" />)}
          <form onSubmit={handleSubmit} className='form-control bs mt-5 tableback'>
            <h1 className='headingreg'> Login </h1>

            <input type="email" name="Email" required className='form-control mt-2 tableback' placeholder='email' value={postdata.Email} onChange={handleOnChange} />

            <input type="password" name="Password" required className='form-control mt-2 tableback' placeholder='Password' value={postdata.Password} onChange={handleOnChange} />

            <button type='submit' className='btn btn-primary mt-3 '>Login</button>
          </form>




        </div>

      </div>

    </div>
  );
}

export default Login;
