import React, { Component } from "react";
import Ractor from "./Ractor";
class App extends Component {
  state = {
    ractors: [
      { name: "ali", age: "30", id: "1" },
      { name: "hassan", age: "45", id: "2" },
      { name: "sina", age: "25", id: "3" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Ractor App</h1>
        <Ractor ractors={this.state.ractors} />
      </div>
    );
  }
}

export default App;
