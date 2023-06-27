import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate  } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("currentUser"))

  function logout() {
    localStorage.removeItem("currentUser")
    // window.location.href = "/"
    navigate("/")
  }
  return (
    <div className="main-box-navbar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        
         


            <NavLink
  to="/"
 
   style={{textDecoration: 'none', color: 'black'}}  >
<b>KHAJURAHO_Hotel</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</NavLink>



          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav " >
              <li class="nav-item  m-1">
                {/* <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <NavLink className="navlink " to="/"  >Home&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
              </li>
              <li class="nav-item  m-1" >
                <NavLink className="navlink" to="/getrooms"  >Book Now &nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
                {/* <a class="nav-link" href="/getrooms">
                  Booking Rooms
  </a> */}
              </li>
              <li class="nav-item  m-1">
                {/* <a class="nav-link" href="#">
                  Features
                </a> */}
                <NavLink className="navlink" to="/facilities" > Hotel Facilities &nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
              </li>
              <li class="nav-item  m-1">
                {/* <a class="nav-link" href="https://www.google.com/maps/place/Dulhadev+Shiva+Temple/@24.8390233,79.9231332,15z/data=!3m1!4b1!4m6!3m5!1s0x3982e5e52192ae39:0x1a1a3cb859a563fb!8m2!3d24.8390236!4d79.9318665!16s%2Fm%2F0j66y04">
                 Map Location
                </a> */}
                <NavLink className="navlink" to="" >Map Location</NavLink>
              </li>
            </ul>

            {user ? (<> <ul class="navbar-nav  " style={{ marginLeft: "auto" }}>

              {/*=========== for logout and show name purpose ======================*/}


              <li class="nav-item  m-1">
                {/* <a class="nav-link" href="#">
                  Regster
                </a> */}
                <NavLink className="navlink" to="/profile" ><i class="fa-solid fa-user"></i> Profile &nbsp;&nbsp;</NavLink>    
                {/* {user.data.data.Name.substring(0, 5)} */}
              </li>
              {/* <li class="nav-item  m-1"> */}
                {/* <a class="nav-link" href="#">
                  Regster
                </a> */}
                {/* <NavLink className="navlink" to="/profile" > Profile &nbsp;&nbsp;</NavLink> */}
              {/* </li> */}
              <li class="nav-item  m-1">
                {/* <a class="nav-link" href="#">
                  Login
                </a> */}
                <NavLink className="navlink" to="" onClick={logout} >Logout </NavLink>
              </li>
            </ul></>) : (<>
              <ul class="navbar-nav  " style={{ marginLeft: "auto" }}>
                <li class="nav-item  m-1">
                  {/* <a class="nav-link" href="#">
                  Regster
                </a> */}
                  <NavLink className="navlink" to="/register" > Regster  &nbsp;&nbsp;</NavLink>
                </li>
                <li class="nav-item  m-1">
                  {/* <a class="nav-link" href="#">
                  Login
                </a> */}
                  <NavLink className="navlink" to="/login" >Login </NavLink>
                </li>
              </ul></>)}


          </div>
        </div>
      </nav>

      {/* <div>

<figure class="text-center">
  <blockquote class="blockquote">
    <h1>Welcome to my Hotel In Khajuraho.</h1>
  </blockquote>
  <figcaption class="blockquote-footer">
   Comes As a Friend , GO As a Family <cite title="Source Title">, Welcome To My Hotel</cite>
  </figcaption>

 <p style={{"fontSize":"1.1rem"}}>
 We welcome you In the City Of Temple Khajuraho.We are Located in the heart of city. 2 Minute Walking distance from the Main Western Groups of temples, 5 minutes walk from bus stand,3 Km.from the Airport and 8 K.m From the Khajuraho Railway Station Hotel Surya has the unique distinction of having kept alive its old-world charm along with modern amenities. All the rooms at the Hotel Surya are decorated with faultless class. Stay with us and get the real Home Life Experience.

Enjoy your stay with our helpful and friendly staff.We have 45 Executive Rooms and Suites with A/C and Non A/C, elegantly appointed and tastefully decorated, to make your stay comfortable and pleasant.


"Dear Guest I have a request to you Kindly check our property first before getting misguide by different websites, People and other sources. As you know that there are many people in the world and they have a different thinking and choices So First check us by yourself and then please compare which is good and what is correct. Our aim is to provide you with the most comprehensive, up to date travel information and Hospitality available for your Khajuraho stay."
 </p>
</figure>
</div> */}


    </div>
  );
}

export default Navbar;
