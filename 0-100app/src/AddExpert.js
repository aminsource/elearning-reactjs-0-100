import React, { Component } from "react";

export class AddExpert extends Component {
  state = {
    name: null,
    age: null
  };
  handelChange = e => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.addExpert(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label htmlFor="name">name</label>
          <input type="text" id="name" onChange={this.handelChange} />
          <label htmlFor="age">age</label>
          <input type="text" id="age" onChange={this.handelChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddExpert;
