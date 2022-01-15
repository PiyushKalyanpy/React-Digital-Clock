import React, { useState } from "react";
import { Component } from "react";

class Timer extends Component {
  state = {
    time: new Date().toLocaleTimeString().replace("PM", "").replace("AM", ""),
  };
  UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    time = time.replace("PM", "").replace("AM", "");
    this.setState({ time: time });
  };

  render() {
    setInterval(this.UpdateTime, 1000);
    return (
      <React.Fragment>
        <p>{this.state.time}</p>
      </React.Fragment>
    );
  }
}

export default Timer;
