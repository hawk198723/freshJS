import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jason!",
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ name: "Jason!" }), 2000);
  }
  render() {
    const { name } = this.state;
    console.log("**********Parent Comp*************");
    return (
      <div>
        Parent Component
        <PureComp name={name}></PureComp>
        <RegularComp name={name}></RegularComp>
      </div>
    );
  }
}

export default ParentComp;
