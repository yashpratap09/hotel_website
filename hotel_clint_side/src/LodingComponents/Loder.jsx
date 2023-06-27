
import React , { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";


function Loder() {

    let [loading, setLoading] = useState(true);



   
  return (
    <div className="d-flex justify-content-center " style={{marginTop:"150px"}} >

<div className="sweet-loading  ">
     
      <RingLoader
        color="#000"
        loading={loading}
        cssOverride=""
        size={80}
        
      />
    </div>
      
    </div>
  );
}

export default Loder;
