import React, { Component,useContext } from 'react'
import {UserContext} from '../App'

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


//Importing Images
import trainicon from '../../src/resources/trainicon.png'

//Importing Components

import Logout from './Logout';
import navImage from '../../src/resources/navnew3.jpg'

import axios from 'axios';
//import {reducer, initialState} from '../src/reducer.js/UseReducer'



 class  NavBar extends Component {
  
  
  render(){
    let button;
    //After
    if(this.props.user){
      button=(
      <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/aboutus'>About Us</a></li>
      <li><a href='/trainlist'>Train List</a></li>
      <li><a href='/booking'>Book Ticket</a></li>
      <li><a href='/'onClick={Logout}>Logout </a></li>
  </ul>
  )
    }
    //Before 
    else{
      button= (
        <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/aboutus'>About Us</a></li>
                <li><a href='/trainlist'>Train List</a></li>
                <li><a href='/adminSignIn'>Admin</a></li>
                <li><a href='/UserLogin'>Login</a></li>
            </ul>
      )
    }
        return (
     
    <div className="wrap">
          <nav>
        <label className='logo'>Railway Reservation System</label>
        {button} 
      </nav>
      </div>
        )
      }
}

export default NavBar