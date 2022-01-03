import React, { Component } from "react";

import visalogo from "../resources/visalogo.png";
import masterlogo from "../resources/masterlogo.png";
import {SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking";


export const TOTAL = "TOTAL";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",
   
      source: "",
      destination: "",
      nooftickets: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //setting the state value to session storage value



    this.setState({ source: sessionStorage.getItem(SOURCE) });
    this.setState({ destination: sessionStorage.getItem(DESTINATION) });
    this.setState({ nooftickets: sessionStorage.getItem(NOOFTICKETS) });
    this.setState({ total: sessionStorage.getItem(NOOFTICKETS) * 340 });
    this.setState({
    });
    this.setState({
      total:
        sessionStorage.getItem(NOOFTICKETS) * 340 -
        sessionStorage.getItem(NOOFTICKETS) * 340 * (10 / 100)
    });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });

    let total = this.state.total;
    sessionStorage.setItem(TOTAL, total);
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/sbipg`);
    } else if (method === "mobile") {
      this.props.history.push(`/submitPaymentDetail`);
    }
    if(this.componentDidMount()){
      fetch("http://localhost:9040/booking/addBooking", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json",
          "Access-Control-Allow-Origin": "*"
          
        },
        "body": JSON.stringify({
          trainid: this.state.trainid,
          source: this.state.source,
          destination: this.state.destination,
          nooftickets: this.state.nooftickets,
        })
      })
      .then(response => response.json())
      .then(response => {
       alert("Your ticket is not booked")
      })
      .catch(err => {
        alert("Your ticket is successfully booked")
      });
    }

  }
  

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card"  style={{backgroundColor:"#f0f8ff"}}>
              <h3 style={{backgroundColor:"#D4D4D4",color:"#000066"}}>Your Details</h3>
              <h5
                className="card-header info-color white-text text-center py-4"
          >
                <strong >
                  {" "}
                  <h6>
                    {" "}
                    Source :{" "}
                    <input
                      type="text"
                      value={this.state.source}
                      readOnly
                      
                    />{" "}
                  </h6>
                  <h6>
                    {" "}
                    Destination :{" "}
                    <input
                      type="text"
                      value={this.state.destination}
                      readOnly
                      
                    />
                  </h6>
                  <h6>
                    {" "}
                    No. of Tickets :{" "}
                    <input
                      type="text"
                      value={this.state.nooftickets}
                      readOnly
                      
                    />
                  </h6>{" "}
              
                  <h6>
                    {" "}
                    Your Total Bill : {" "}
                    <input
                      type="text"
                      value={this.state.total}
                      readOnly
                      
                    />
                  </h6>
                  </strong>
                  </h5>
              <div style={{ backgroundColor:"#D4D4D4",color:"#000066"}}>
                <h3>Select the Payment Method</h3>
              </div>
              <div className="card-body px-lg-5">
                <form 
                  className="text-center"
                  style={{ color: "#696969" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="custom-control custom-radio" >
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard"> Credit Card</label>
                    <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        <img src={masterlogo} width="50" height="22" alt="" />
                    </div>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    style={{backgroundColor:"#000066",color:'white',border:"none"}}>
                    <strong>
                    NEXT
                    </strong>
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;