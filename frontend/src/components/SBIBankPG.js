import React, { Component } from "react";

//importing the images
import sbilogo from "../resources/sbi.jpg";
import cvv from "../resources/cvv.png";
import { TOTAL } from "./PaymentMethod";

class SBIBankPG extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      total: ""
    };
  }

  componentDidMount() {
    this.setState({
      total: sessionStorage.getItem(TOTAL)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/thankyou`);
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(234, 221, 202)" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " #C19A6B " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h2> Your Bill : Rs.{this.state.total} </h2>
                </strong>
              </h5>
              <div className="logo" style={{backgroundColor:"wheat"}}>
                <img src={sbilogo} width="300" height="200"  alt="" />
              </div>

              <div style={{ backgroundColor: " #C19A6B " }}><h2> State Bank of India Payment Gateway </h2></div>
              
              <div className="card-body px-lg-5" style={{backgroundColor:"wheat"}}>
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.onSubmit}
                >
                <strong>
                  <label> Name on Card : </label>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="form-control mb-4"
                  />
                  <label> Card Number : </label>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    className="form-control mb-4"
                  />
                  <label>CVV :</label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control mb-4"
                  />
                  <label> Amount : </label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-4"
                    value={this.state.total}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    style={{backgroundColor:"burlywood",color:'white',border:"none"}}>
                    <strong>
                    PROCEED
                    </strong>
                  </button>
                </strong>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default SBIBankPG;