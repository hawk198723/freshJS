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
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import ClassCounter from "./components/ReactHooks/useStateHook/ClassCounter";
import HookCounter from "./components/ReactHooks/useStateHook/HookCounter";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/ReactRouter/Routes/Home";
import { About } from "./components/ReactRouter/Routes/About";
import { NavBar } from "./components/ReactRouter/Routes/NavBar";
import HookCounterPreviousState from "./components/ReactHooks/useStateHook/HookCounterPreviousState";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Message />
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

        <LifeCycleA />

        <FragmentDemo />

        <Table />

        <ParentComp /> */}
        <ClassCounter />
        <HookCounter />
        <HookCounterPreviousState />
      </div>
      // <>
      //   <NavBar />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />} />
      //   </Routes>
      // </>
    );
  }
}

export default App;
