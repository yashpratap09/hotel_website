import React , { useState } from "react";
import {Modal , Button,Carousel} from "react-bootstrap"
import { Link } from "react-router-dom";



function RoomsDetails(room) {
  // ,fromDate,toDate

    const [show, setShow] = useState(false);
   
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    const fromDate = JSON.parse(localStorage.getItem("fromDate"))
    const toDate = JSON.parse(localStorage.getItem("toDate"))

    
    return (

      <div>



        <div className='row bs' style={{
            " textalign": "left"
        }}>
            <div className="col-md-4">
                <img src={room.room.ImageUrls[0]} className="smallimg" />

            </div>

            <div className="col-md-7 ">
                <h1>{room.room.Name}</h1>
                <p>
                   
                    <p>Max Count : {room.room.MaxCount}</p>
                    <p>Rentperday:  {room.room.Rentperday}</p>
                    <p>Type : {room.room.type}</p>
                    <p>Phone Number: {room.room.PhoneNumber}</p>
                </p>

                <div style={{ float: "right" }}>

                {(fromDate && toDate) && (

                              
                            <Link to={`/book/${room.room._id}`}>
                            <button className="btn btn-primary m-2">Book Now</button>
                            </Link>      )}
                          

                   

                    <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
                </div>


            </div>

            <div>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.room.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>



        <Carousel>
        {room.room.ImageUrls.map((url,index)=>{
            return <Carousel.Item key={index} >
            <img
              className="d-block w-100 bigimg"
              src={url}
             
            />
    
    
            
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        })}


      
    </Carousel>

    <p style={{paddingTop:"13px"}} >{room.room.Description}</p>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>




          
        </Modal.Footer>
      </Modal>
            </div>

        </div>

        </div>     
    );
}

export default RoomsDetails;
