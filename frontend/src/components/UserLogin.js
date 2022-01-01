import React, { Component } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';

export class UserLogin extends Component {

    handleSubmit=e=>{
        e.preventDefault();
        const data={
            email:this.email,
            password: this.password
        }
        axios.post("auth",data)
        .then(res=>{
            alert('Your Logged In')
            sessionStorage.setItem('token',res.data.token)
            console.log(res)
            this.props.history.push(`/`);
            window.location.reload()
        })
        .catch(err=>{
            alert('Invalid Credentials')
            console.log(err)
        })
    }

    render() {
        return (
            <div class="h-20 h-custom">
          <div class="container py-5 h-20">
            <div class="row d-flex justify-content-center align-items-center h-20">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3"  style={{backgroundColor:"#f0f8ff"}}>
                <center>
                  <div class="card-body p-4 p-md-5">
                    <h3 class="Login" style={{color:"#000066"}}><strong> User Login</strong></h3>
                  </div>
                  <div>
                    <form class="px-md-2" onSubmit={this.handleSubmit}>
                    <div class="form-outline mb-4"  style={{width:'300px'}}>
                        <input type="email" name="email"id="form3Example1q" class="form-control" placeholder=" Email Id" onChange={e=>this.email=e.target.value}/><br/>
                        <input type="password" name="password" id="form3Example1q" class="form-control" placeholder=" Password" onChange={e=>this.password=e.target.value}/><br/>
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
                                <Link to="/SignUp" className="fw-bold text-body">
                                    <h6 style={{color:"blue"}}>Register here</h6>
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
        </div>
        )
    }
}

export default UserLogin
