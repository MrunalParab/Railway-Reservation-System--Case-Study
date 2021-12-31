import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
//import "../moduleCSS/form.css"

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:'',
             email:"",
             mobileNumber:'',
             gender:'',
         
             nameError:'',
             passwordError:'',
             mobileNumberError:'',
             emailError:"",
             genderError:'',
             isProfile: false
        }
        this.register=this.register.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    valid(){
        if(this.state.name.length<5 && this.state.password.length<6 && this.state.email.length<10 && this.state.mobileNumber.length<10 ) {
            this.setState({
                emailError:"Invalid email",
                nameError:"Invalid Name",
                passwordError:"Invalid Password", 
                mobileNumberError:"Invalid Mobile Number"

            })
        }
        else if(this.state.name.length<5){
            this.setState({
                nameError:"Invalid Name"})
        }
        else if(this.state.password.length<6){
            this.setState({
                passwordError:"Invalid Password"
            })
        }
        else if(this.state.email.length<10){
            this.setState({
                emailError:"Invalid Email"
            })
        }
        else if(this.state.mobileNumber.length>10){
            this.setState({
                mobileNumberError:"Invalid Mobile Number"
            })
        }
        else{
            return true
        }
    }
    register(e){
        this.setState({
            nameError:"",
            emailError:"",
            passwordError:"",
            mobileNumberError:""

        })
        e.preventDefault()
        
        if(this.valid()){
            fetch("http://localhost:9060/subs",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    name: this.state.name,
                    password:this.state.password,
                    email:this.state.email,
                    mobileNumber: this.state.mobileNumber,
                    gender: this.state.gender
                })
            })
            .then(response=> response.json())
            .then(response=>{
                alert("You have been Registered Successfully")
                this.props.history.push(`/Login`);
            })
            
            .catch(err=>{
                alert("Your Registration Failed..!!!!")
            })
            
        }
    }
    handleChange(changeObject){
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
            <div className="card-body p-4 p-md-5">
            <form>
                <div>
                    <h3 style={{color:"#000066"}}><strong>Register</strong></h3>
                </div>
                <br/>
                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Name" 
                    onChange={(e) => this.handleChange({ name: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.nameError}</p>
                </div>
                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Email" 
                    onChange={(e) => this.handleChange({ email: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.usernameError}</p>
                </div>
                <div className="form-group" style={{width:300}}>
                    <input type="password" className="form-control" placeholder="Enter Password"  
                    onChange={(e) => this.handleChange({ password: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.passwordError}</p>
                </div>

                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Mobile number"  
                    onChange={(e) => this.handleChange({ mobileNumber: e.target.value })}/>
                    <p style={{color:"red" }}>{this.state.mobileNumberError}</p>
                </div>

                 {/* <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Gender" 
                    onChange={(e) => this.handleChange({ gender: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.genderError}</p>
                </div>  */}

                <div className="form-group">
                <select name="gender" id="gender" style={{color:"#	575757"}}>
                <option value="none" selected>Select Gender</option>
                    <option value="Male" onChange={(e) => this.handleChange({ gender: e.target.value })}>
                        Male</option>
                    <option value="Female" onChange={(e) => this.handleChange({ gender: e.target.value })}>
                        Female</option>
                    <option value="Other" onChange={(e) => this.handleChange({ gender: e.target.value })}>
                        Other</option>
                </select>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block" 
                onClick={(e)=>this.register(e)} style={{backgroundColor:"#000066"}} >Register</button><br/>
              <p>Already have an account?  <Link to="/Login">Login Here</Link></p>
            </form>
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