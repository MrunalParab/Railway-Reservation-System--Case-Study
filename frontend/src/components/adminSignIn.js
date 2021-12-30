import React, { Component, useContext, useState, Fragment } from "react";
import { Link} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";




const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!")
});

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('')
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        if (fromUrl) {
          history.push(fromUrl);
        } else {
          history.push("/addTrain");
        }
      };
      
        const login = (userData) => {
            fetch("http://localhost:9060/auth", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              "body": JSON.stringify({
                username: userData.username,
                password: userData.password
              })
            })
            .then(response => response.json())
            .then(response => {
              if(response.error){
               alert('your userId and password is not correct');
              }else {
                const userData = {
                  token:response,
                  name:username
              } 
               signInSuccess(userData)
               console.log(response)
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
        return (
            <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const userData = { ...values };
                resetForm();
                login(userData);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {() => (
                <section class="h-100 h-custom" style={{backgroundColor: "rgb(234, 221, 202)"}}>
                <div class="container py-5 h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-8 col-xl-6">
                      <div class="card rounded-3">
                      <center>
                        <div class="card-body p-4 p-md-5" style={{backgroundColor:"#C19A6B"}}>
                          <h3 class="Register" style={{color:"white"}}><strong>Admin Login</strong></h3>
                        </div>
                        <div style={{backgroundColor:"wheat"}}>
                          <br/>
                          <form class="px-md-2">
              
                          <div class="form-outline mb-4"  style={{width:'300px',color:"#696969"}}>
                              <br/><br/><br/>
                              <input type="text" id="form3Example1q" class="form-control" placeholder=" Email Id"/><br/>
                              <input type="text" id="form3Example1q" class="form-control" placeholder=" Password"/><br/>
                              </div>
                          <button className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                                  type="submit"
                                  style={{backgroundColor:"burlywood",color:'white',border:"none"}}>
                                    <strong>
                                    Login
                                    </strong>
                                  </button>
                                  <div style={{color:"#696969"}}>
                                      <h5>Don't have already an account? </h5>
                                      <Link to="/adminSignUp" className="fw-bold text-body">
                                          <u style={{color:"#696969"}}>Register here</u>
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
          )}
          </Formik>
        );
          
      
    }
    export default Login;