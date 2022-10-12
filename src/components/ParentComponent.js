import React, { Component } from "react";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }
  render() {
    return <div>ParentComponent</div>;
  }
}

export default ParentComponent;
