import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";


//export the variable to access from other components
export const TRAINID = "TRAINID";
export const SOURCE = "SOURCE";
export const DESTINATION = "DESTINATION";
export const NOOFTICKETS = "NOOFTICKETS";

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    
    this.checkSource = this.checkSource.bind(this);
    this.checkDestination = this.checkDestination.bind(this);
    this.checkTickets = this.checkTickets.bind(this);
    this.storeDetails = this.storeDetails.bind(this);

    //Equal the state to empty
    this.state = {
    
      
      source: "",
      destination: "",
      nooftickets: ""
    };
  }
  

  //get the input data and store it on variable and
  //display the input data value in console

  //store the input data into states

  checkSource(e) {
    var soList = document.getElementById("soList").value;
    this.setState({
      source: e.target.value
    });
    console.log("Source : " + soList);
  }
  checkDestination(e) {
    var deList = document.getElementById("deList").value;
    this.setState({
      destination: e.target.value
    });
    console.log("Destination : " + deList);
  }
  checkTickets(e) {
    var tickets = document.getElementById("tickets").value;
    this.setState({
      nooftickets: e.target.value
    });
    console.log("No of Tickets : " + tickets);
  }

  //store the state value into variable
  //check if state is not equal to empty if not then save
  //that data into session storage
  storeDetails(e) {
    e.preventDefault();
  
   
    let source = this.state.source;
    let destination = this.state.destination;
    let nooftickets = this.state.nooftickets;

    //Validating the source, If validated store the data to sessionStorage.
    if (source === "") 
    {
      alert("SOURCE cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } 
    else if (source !== "") 
    {
      sessionStorage.setItem(SOURCE, source);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the destination, If validated store the data to sessionStorage.
    if (destination === "") {
      alert("DESTINATION cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } 
    else if (destination===source)
    {
      alert("DESTINATION and SOURCE cannot be same");
      this.props.history.push(`/booking`);
    }
    else if (destination !== "") 
    {
      sessionStorage.setItem(DESTINATION, destination);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the nooftickets, If validated store the data to sessionStorage.
    if (nooftickets === "") 
    {
      alert("NO OF TICKETS cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } 
    else if (nooftickets === "0") 
    {
      alert("NO OF TICKETS cannot be zero")
      //go to another component when storeMethod is called
      this.props.history.push(`/booking`);
    }
    else if (nooftickets !== "") 
    {
      sessionStorage.setItem(NOOFTICKETS, nooftickets);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }
    

  }

  render() {
    return (
      <div class="h-20 h-custom">
      <div class="container py-5 h-20">
        <div class="row d-flex justify-content-center align-items-center h-20">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3"  style={{backgroundColor:"#f0f8ff",width:"600px"}}>
            <center>
              <div class="card-body p-4 p-md-5">
                <h3 class="Login" style={{color:"#000066"}}><strong>Book Tickets</strong></h3>
              </div>
                <div className="card-body px-lg-5">
                  <form
                    className="text-center" 
                    style={{ color: "#696969" }}
                    onSubmit={this.storeDetails}
                    
                  >
                    <label><strong>Train No : &nbsp; </strong> </label>
                    <input type="text" placeholder="Enter Train No"></input>
                    <br></br><br></br>

                    <label><strong>Source : &nbsp; </strong> </label>
                    <select class="source" id="soList" onChange={this.checkSource}>
                      <option value="" disabled selected >Choose Source</option>
                      <option value="Mumbai"> Mumbai </option>
                      <option value="Dadar"> Dadar </option>
                      <option value="Gujrat"> Gujrat </option>
                    </select>

                    <br></br><br></br>

                    <label> <strong>Destination : &nbsp;</strong></label>
                    <select class="destination" id="deList" onChange={this.checkDestination}>
                      <option value="" disabled selected>Choose Destination</option>
                      <option value="Kudal"> Kudal </option>
                      <option value="Sawantwadi"> Sawantwadi </option>
                      <option value="Delhi"> Delhi </option>
                      <option value="Mangalore"> Mangalore </option>
                      <option value="Mumbai"> Mumbai </option>
                    </select>

                    <br></br><br></br>

                    <label><strong>No. of Tickets : &nbsp; </strong> </label>
                    <input type="text"
                      placeholder="No of tickets"
                      className="form-control mb-4"
                      id="tickets"
                      onChange={this.checkTickets}
                      style={{width:"400px"}}
                    />

            <button className="btn btn-outline-warning btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                    style={{backgroundColor:"#000066",color:'white',border:"none"}}>
                      <strong>
                      NEXT
                      </strong>
                    </button>
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

export default TicketBooking;