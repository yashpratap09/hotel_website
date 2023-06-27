import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter, BrowserRouter, Routes, Route} from "react-router-dom";
import GetRooms from './GetRooms/Getrooms';
import BookRoomScreen from './BookRoomscreen/BookRoomScreen';
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from './LoginRegisterScreen/Register';
import Login from './LoginRegisterScreen/Login';
import Navbar from './HomeComponent/navbar';
import Foter from './HomeComponent/Foter';
import ProfileScreen from './BookRoomscreen/ProfileScreen';
import AdminScreen from './BookRoomscreen/AdminScreen';
import Facilities from './HomeComponent/Facilities';

// exact

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    < Navbar />
    <Routes>
    <Route path="/" exact Component={App}/>  
     <Route path="/getrooms" exact  Component={GetRooms}/>
      <Route path='/book/:roomid' exact  Component={BookRoomScreen } />
      <Route path = "/register" exact Component={Register} />
      <Route path = "/login" exact Component={Login} />
      <Route path = "/profile" exact Component={ProfileScreen} />
      <Route path = "/admin" exact Component={AdminScreen} />
      <Route path = "/facilities" exact Component={Facilities} />


    </Routes>
    <Foter />
       
       
       
       </BrowserRouter>

  
)
