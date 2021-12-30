import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form } from "formik";

export default class adminSignUp extends Component {
    constructor() {
        super();
        this.state={
            username:'',
            password:'',

            usernameError:'',
            passwordError:'',
            isProfile: false,

        }
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
      } 
      valid(){
        if(this.state.username.length<4 && this.state.password.length<6 ){
         this.setState({
          usernameError:"Invalid Name",
          passwordError: "Password length should be more than 6",
        })
      }
      else  if(this.state.name.length<4){
          this.setState({
          usernameError:"Invalid Username"})
          }
      else  if(this.state.password.length<6){
        this.setState({
        passwordError:"Password length should be more than 6"})
        }
      else{
        return true
      }

      
    }
    
    register(e){
      this.setState({
      usernameError:"",
      passwordError: "",
    })
    e.preventDefault();
      if(this.valid()){
        fetch("http://localhost:9060/subs", {
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
            
          },
          "body": JSON.stringify({
            username: this.state.name,
            password: this.state.password,
          })
        })
        .then(response => response.json())
        .then(response => {
         alert("Admin Registered Successfully!!!")
         this.props.history.push('/')
        })
        .catch(err => {
          alert("Admin Registration Unsuccessful!!!")
        });
      }
    }
    
    handleChange(changeObject) {
        this.setState(changeObject)
      }
    
   render(){
        return (
          <section class="h-100 h-custom" style={{backgroundColor: "rgb(234, 221, 202)"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
        <center>
          <div class="card-body p-4 p-md-5" style={{backgroundColor:"#C19A6B"}}>
            <h3 class="Register" style={{color:"white"}}><strong>Admin Registration Form</strong></h3>
          </div>
          <div style={{backgroundColor:"wheat"}}>
            <br/>
            <form class="px-md-2">

            <div class="form-outline mb-4"  style={{width:'400px'}}>
                <input type="text" id="form3Example1q" class="form-control" placeholder="Enter Name"/><br/>
                <input type="text" id="form3Example1q" class="form-control" placeholder="Enter Password"/><br/>
            </div>
            <button className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    style={{backgroundColor:"burlywood",color:'white',border:"none"}}>
                      <strong>
                      REGISTER
                      </strong>
                    </button>
                    <div style={{color:"#696969"}}>
                                <h5>Have an account already ? </h5>
                                <Link to="/Login" className="fw-bold text-body">
                                    <u style={{color:"#696969"}}>Login here</u>
                                </Link>
                            </div>
                            <br></br><br/>
            </form>

          </div>
          </center>
        </div>
      </div>
    </div>
  </div>
</section>

          
        );
   }
  }
 