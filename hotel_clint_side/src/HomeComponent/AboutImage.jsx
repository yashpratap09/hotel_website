import React from 'react';
import { NavLink } from "react-router-dom";


export default function AboutImage() {
  return (
    // <div className='bg-image hover-overlay' style={{"margin":"1rem",  "maxHeight":'30rem' , "maxWidth":"40rem"}}>
    //   <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg" className='img-fluid' />
    
    //     <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
     

      
    // </div>

    <div>
      <hr />

    <div className='row'>

      <div className='col-md-6'  >

        <img style={{maxWidth:"100%" ,Height:"100px" ,marginLeft:"12px"}} src="http://synaheritagehotel.com/images/Home-Page/room.jpg" alt="" />

        

      </div>
      



      <div style={{maxWidth:"48rem" ,maxHeight:"100%"  ,margin:0 , backgroundColor:" " , textAlign:"center"}}  className='col-md-6'>

        <div >
          <br /> <br />

        <h1><b>R O O M S</b></h1> <br /> 

        <p>Luxury experience offering stylish, <br /> contemporary, self-contained accommodation at Khajuraho</p>

        <NavLink to="/getrooms" className="btn" > MORE DETAILS </NavLink>

        <hr />
        

        </div> 

      </div>

    </div>

    <hr />














    <div className='row'>


    <div style={{maxWidth:"48rem" ,maxHeight:"100%"  ,margin:0 , backgroundColor:"" , textAlign:"center"}}  className='col-md-6'>

<div >
  <br /> <br />

<h1><b>ACTIVITIES</b></h1> <br /> 

<p>Check out some of the major tourist attraction , <br /> and places to visit near Khajuraho.</p>

<NavLink to="/facilities" className="btn" > MORE DETAILS </NavLink>

<hr />


</div> 

</div>

<div className='col-md-6'  >

  <img style={{maxWidth:"100%" ,Height:"100px" ,marginLeft:"12px"}} src="http://synaheritagehotel.com/images/Home-Page/temples.jpg" alt="" />

  

</div>






</div>

<hr />





<div className='row'>

      <div className='col-md-6'  >

        <img style={{maxWidth:"100%" ,Height:"100px" ,marginLeft:"12px"}} src="http://synaheritagehotel.com/images/Home-Page/tour-packages.jpg" alt="" />

        

      </div>



      <div style={{maxWidth:"48rem" ,maxHeight:"100%"  ,margin:0 , backgroundColor:"" , textAlign:"center"}}  className='col-md-6'>

        <div >
          <br /> <br />

        <h1><b>TOUR PACKAGES</b></h1> <br /> 

        <p>Explore the temples of Khajuraho and nearby places with us. Get best deal on our temple tour packages and wildlife tour packages to Bandhavgarh & Panna.</p>

        <NavLink to="/facilities" className="btn" > MORE DETAILS </NavLink>
        <hr />
        

        </div> 

      </div>

    </div>
    <hr />



  
  



    </div>
  );
}