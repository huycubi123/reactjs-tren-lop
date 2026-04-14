import React, { Component } from "react";

export default class EventNoParameter extends Component {
  eventHandlerClick1 = () => {
    console.log("event Handler Click1");
  };
  eventHandlerClick2() {
    console.log("event Handler Click2");
  }

  render() {
    return (
      <div>
        <button onClick={this.eventHandlerClick1}>Click Me</button>
        <button onClick={this.eventHandlerClick2}>Click Me Too</button>
      </div>
    );
  }
}
