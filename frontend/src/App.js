import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import style from './style.module.css/style.css'

import HomeSlider from './components/HomeSlider';
import TrainList from './components/TrainList';
import TicketBooking from "./components/TicketBooking";
import PaymentMethod from "./components/PaymentMethod";
import SBIBankPG from "./components/SBIBankPG";
import ThankYou from "./components/ThankYou";
import SignUp from "./components/SignUp";
import adminSignIn from './components/adminSignIn';
import createTrain from './components/createTrain';
import deleteTrain from "./components/deleteTrain";
import Login from "./components/Login";
import aboutus from './components/aboutus';

import UserLogin from './components/UserLogin';
import PaytmPG from "./components/PaytmPG";
import NavBar from "./components/NavBar";

import axios from 'axios';


//import PaytmPG from "./components/PaytmPG";


//Importing Images
import navImage from './resources/Header.jpg'
import trainicon from './resources/trainicon.png'
// import namaste from './resources/namaste.png'
// import masterlogo from './resources/masterlogo.png'



class App extends Component {
 
  //const isLoggedIn=sessionStorage.getItem('token')
  state={};
  componentDidMount(){
   //axios.get('http://localhost:8682/auth')
   const config={
     headers: {
      Authorization: 'Bearer '+ sessionStorage.getItem('token'),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
     }
   };
   axios.get('dashboard',config).then(
     res=>{
       this.setState({
         user: res.data
       })
       console.log(res)
     },
     err=>
     {
       console.log(err)
     }
   )
  }

   render() {

  // let button;
  // //After login
  //   if(this.props.user){
  //     button=(
  //      <ul>
  //         <li><a href='/'>Home</a></li>
  //         <li><a href='/aboutus'>About Us</a></li>
  //         <li><a href='/trainlist'>Train Schedule</a></li>
  //         <li><a href='/booking'>Booking</a></li>
  //         <li><a href='/UserLogin' onClick={Logout} >Logout</a></li>
  //       </ul> 
  // )
  //   }
  //   //Before Login
  //   else{
  //     button= (
  //       <ul>
  //         <li><a href='/'>Home</a></li>
  //         <li><a href='/aboutus'>About Us</a></li>
  //         <li><a href='/trainlist'>Train Schedule</a></li>
  //         <li><a href='/UserLogin'>Login</a></li>
  //         <li><a href='/adminSignIn'>Admin</a></li>
  //         <li><a href='/booking'>Booking</a></li>
  //       </ul> 
  //     )
  //   }

  return (
     <Router>

          <NavBar user={this.state.user}/>
      {/* <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      <nav>
        <label className='logo'>Railway Reservation System</label>
        {/* <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/aboutus'>About Us</a></li>
          <li><a href='/trainlist'>Train Schedule</a></li>
          <li><a href='/UserLogin'>Login</a></li>
          <li><a href='/adminSignIn'>Admin</a></li>
        </ul> */}
        {/* <link rel='stylesheet' href='style.css'></link>

        {button}
      </nav> */} 
      
    <Switch>
      <Route path="/" exact component={HomeSlider} /> 
      <Route path="/trainlist" exact component={TrainList} />
      <Route path="/booking" exact component={TicketBooking} />
      <Route path="/payment" exact component={PaymentMethod} />
      <Route path="/sbipg" exact component={SBIBankPG} />
      <Route path="/thankyou" exact component={ThankYou} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/adminSignIn" exact component={adminSignIn} />
      <Route path="/AddTrain" exact component={createTrain} />
      <Route path="/deleteTrain" exact component={deleteTrain} />
      {/* <Route path="/Login" exact component={Login} />  */}
      <Route path="/aboutus" exact component={aboutus} />
      {/* <Route path="/Logout" exact component={Logout} /> */}
      <Route path="/UserLogin" exact component={UserLogin} />
      <Route path="/submitPaymentDetail" exact component={PaytmPG} />
    </Switch>

    <div
        className="footer"
        style={{ backgroundColor:"#D4D4D4", width: 1260, height: 60 }}
      >
        <center>
          {" "}
          <div>
            <img src={trainicon} width="40" />{" "}
          </div>{" "}
          <div style={{ color: "white" }}></div>
        </center>
      </div>
    </Router>
  );
}
}

export default App;
