import "./App.css";
import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        <Greet name="Bruce" heroName="Batman">
          <p>This is Children props.</p>
        </Greet>

        <Greet name="Clark" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />

        <Counter />

        <Form />

        <FunctionClick />
        <ClassClick />

        <EventBind />
        <UserGreeting />
      </div>
    );
  }
}

export default App;
