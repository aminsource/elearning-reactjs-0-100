import React, { Component } from "react";
import Ractor from "./Ractor";
import AddExpert from "./AddExpert";
class App extends Component {
  state = {
    ractors: [
      { name: "ali", age: "30", id: "1" },
      { name: "hassan", age: "45", id: "2" },
      { name: "sina", age: "25", id: "3" }
    ]
  };
  addExpert = expert => {
    expert.id = Math.random();
    let ractors = [...this.state.ractors, expert];
    this.setState({ ractors: ractors });
  };
  deleteExpert = id => {
    // console.log(id);
    let ractors = this.state.ractors.filter(expert => {
      return expert.id !== id;
    });
    this.setState({ ractors: ractors });
  };
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>Ractor App</h1>
        <Ractor ractors={this.state.ractors} deleteExpert={this.deleteExpert} />
        <AddExpert addExpert={this.addExpert} />
      </div>
    );
  }
}

export default App;
