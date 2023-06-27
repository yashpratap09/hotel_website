import { useState } from 'react'
import Navbar from './HomeComponent/navbar'
import './App.css'
import Carousel from "./HomeComponent/Carousel"
import AboutImage from "./HomeComponent/AboutImage";
import Foter from "./HomeComponent/Foter";
import Smalldis from "./HomeComponent/smalldis";

function App() {


  return (
    <div className='App' >
     

      <Carousel />
      <Smalldis />


      <AboutImage />
      






    </div>
  )
}

export default App
