import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form ,Field} from "formik";

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
          <div class="h-20 h-custom">
          <div class="container py-5 h-20">
            <div class="row d-flex justify-content-center align-items-center h-20">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3"  style={{backgroundColor:"#f0f8ff"}}>
                <center>
                  <div class="card-body p-4 p-md-5">
                    <h3 class="Login" style={{color:"#000066"}}><strong>Admin Registration</strong></h3>
                  </div>
                  <div>
                    <Form class="px-md-2">
                    <div class="form-outline mb-4"  style={{width:'300px'}}>
                        <Field type="email" placeholder="Enter Username" name="email"id="form3Example1q" class="form-control" placeholder=" Email Id"/><br/>
                        <Field type="password"  placeholder="Enter Password"name="password" id="form3Example1q" class="form-control" placeholder=" Password"/><br/>
                        </div>
                    <button className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                            onClick={()=>{}}
                            type="submit"
                            style={{backgroundColor:"#000066",color:'white',border:"none"}}>
                              <strong>
                              Login
                              </strong>
                            </button>
                            <div>
                                <h5>Don't have already an account? </h5>
                                <Link to="/adminSignIn" className="fw-bold text-body">
                                    <h6 style={{color:"blue"}}>Register here</h6>
                                </Link>
                            </div>
                            <br></br><br/>
                    </Form>
        
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

          
        );
   }
  }
 