import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteIcon from "../../src/resources/trash-2 (1).svg";

const Train = props => (
  <tr>
    <td> {props.train.trainId} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.startStation} </td>
    <td> {props.train.endStation} </td>
    </tr>
  
  
);
class TrainList extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9030/search/allTrains")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div >
        <table className="table table-striped-dark" style={{color:"#000066"}} >
          <thead>
            <tr>
              <th><b>Train No. </b></th>
              <th><b> Train Name </b></th>
              <th><b> Source </b></th>
              <th><b> Destination </b></th>
            </tr>
          </thead>
          <tbody>{this.trainList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TrainList;
