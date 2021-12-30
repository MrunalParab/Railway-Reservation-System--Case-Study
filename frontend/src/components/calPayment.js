import React, { Component } from "react";
import { SOURCE, DESTINATION, NOOFTICKETS } from "./TicketBooking";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }

  calPay() {
    let total = this.state.total;

    if (SOURCE === "Mumbai" && DESTINATION === "Kudal") {
      // this.state.total = NOOFTICKETS * 300;
      this.setState({ total: NOOFTICKETS * 300 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } 
    else if (SOURCE === "Dadar" && DESTINATION === "Sawantwadi") {
      this.setState({ total: NOOFTICKETS * 350 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
    else if (SOURCE === "Mumbai" && DESTINATION === "Delhi") {
        this.setState({ total: NOOFTICKETS * 500 });
        sessionStorage.setItem(TOTALAMMOUNT, total);
    }
    else if (SOURCE === "Mumbai" && DESTINATION === "Mangalore") {
        this.setState({ total: NOOFTICKETS * 400 });
        sessionStorage.setItem(TOTALAMMOUNT, total);
    }
    else if (SOURCE === "Gujrat" && DESTINATION === "Mumbai") {
        this.setState({ total: NOOFTICKETS * 200 });
        sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  render() {
    return <div />;
  }
}