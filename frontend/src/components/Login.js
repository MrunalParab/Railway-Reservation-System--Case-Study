import React, { Component, useContext, useState } from "react";
import { Link} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";




const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  email: Yup.string().required("Email Id is required!")
});

const Login = () => { 
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        if (fromUrl) {
          alert("Not Logged in")
          history.push(fromUrl);
        } else {
          alert("Logged in")
          history.push("/");
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
                email: userData.email,
                password: userData.password
              })
            })
            .then(response => response.json())
            .then(response => {
              if(response.error){
               alert('Enter valid credentials');
              }else {
                const userData = {
                  token:response,
                  name:email
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
        email: "",
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
          <div class="h-20 h-custom">
          <div class="container py-5 h-20">
            <div class="row d-flex justify-content-center align-items-center h-20">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3"  style={{backgroundColor:"#f0f8ff"}}>
                <center>
                  <div class="card-body p-4 p-md-5">
                    <h3 class="Login" style={{color:"#000066"}}><strong>Login</strong></h3>
                  </div>
                  <div>
                    <Form class="px-md-2">
                    <div class="form-outline mb-4"  style={{width:'300px'}}>
                        <Field type="email" name="email"id="form3Example1q" class="form-control" placeholder=" Email Id"/><br/>
                        <Field type="password" name="password" id="form3Example1q" class="form-control" placeholder=" Password"/><br/>
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
                    </Form>
        
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
    </Formik>
  );
    }

    export default Login;