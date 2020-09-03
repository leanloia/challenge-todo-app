import React, { Component } from "react";
import "./App.css";
import ServicesProvider from "./lib/services/servicesProvider";
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <ServicesProvider>
        <div className="App">
        <ToDoList />
        </div>
      </ServicesProvider>
    );
  }
}

export default App;
