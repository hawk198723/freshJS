import React, { Component } from "react";

class ClassClick extends Component {
  classClickHandler() {
    console.log("clicking the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>
          Click me Class Component
        </button>
      </div>
    );
  }
}

export default ClassClick;
