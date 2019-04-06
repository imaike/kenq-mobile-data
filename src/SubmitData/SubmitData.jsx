import React, { Component } from "react";
import "./SubmitData.css";
// import store from "../../state";

class SubmitData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccess: false,
      showError: false,
      showTransmit: true
    };
    this.transmitData = this.transmitData.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
  }

  showSuccess = () => {
    this.setState({
      showSuccess: true,
      showError: false,
      showTransmit: false
    });
  };

  showError = () => {
    this.setState({
      showError: true,
      showTransmit: false,
      showSuccess: false
    });
  };

  transmitData = () => {
    let resultsJson = JSON.parse(sessionStorage.getItem("resultsJson"));
    let firebase = window.firebase;
    const participantId = resultsJson.randomId16;
    console.log(
      "TCL: SubmitData -> transmitData -> participantId",
      participantId
    );

    firebase
      .database()
      .ref(participantId)
      .set(resultsJson, error => {
        if (error) {
          console.log(JSON.stringify("there was a data transmission error"));
          this.showError();
        } else {
          console.log(JSON.stringify("data transmission success"));
          this.showSuccess();
        }
      });

    console.log(
      "TCL: SubmitData -> componentDidMount -> resultsJson",
      JSON.stringify(resultsJson, null, 2)
    );
  };

  componentDidMount() {
    // );
    this.transmitData();
  }

  render() {
    if (this.state.showError === true) {
      return (
        <div className="SubmitData">
          <div className="titleDivSubmitData">
            <h1>Submit Data</h1>
          </div>

          <div className="transmittingAnimation">
            <div className="loading-screen">
              <div className="loadingScreenTitle">
                There was a data transmission error. Please click the "Submit"
                button to try again!
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.showSuccess === true) {
      return (
        <div className="SubmitData">
          <div className="titleDivSubmitData">
            <h1>Submit Data</h1>
          </div>

          <div className="transmittingAnimation">
            <div className="loading-screen">
              <div className="loadingScreenTitle">Success!</div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.showTransmit === true) {
      return (
        <div className="SubmitData">
          <div className="titleDivSubmitData">
            <h1>Submit Data</h1>
          </div>

          <div className="transmittingAnimation">
            <div className="loading-screen">
              <div className="loadingScreenTitle">
                Transmitting Results - Please Wait
              </div>
              <div className="bars-container">
                <div className="bar bar-1" />
                <div className="bar bar-2" />
                <div className="bar bar-3" />
                <div className="bar bar-4" />
                <div className="bar bar-5" />
                <div className="bar bar-6" />
                <div className="bar bar-7" />
                <div className="bar bar-8" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SubmitData;

/*
loading wave animation from https://codepen.io/anron/pen/ZPXzKP?page=1&
Anton Lapko
*/
