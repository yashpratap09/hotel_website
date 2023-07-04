import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (

    <div className='mt-3 mb-3'  style={{"maxWidth":"80%" , marginLeft:"10%" , marginRight:"40px"  }}>
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
      style={{maxHeight:"30rem"}}
        className='w-100 d-block'
        itemId={1}
        src='https://images.oyoroomscdn.com/uploads/hotel_image/199826/large/18533128e66490fc.jpg'
        // src='https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        alt='...'
      >
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
          style={{maxHeight:"30rem"}}
        className='w-100 d-block'
        itemId={2}
       src='https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/emreymftumvt.jpg'
        // src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        alt='...'
      >
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
       style={{maxHeight:"30rem"}}
        className='w-100 d-block'
        itemId={3}
        src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        alt='...'
      >
        {/* <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}

