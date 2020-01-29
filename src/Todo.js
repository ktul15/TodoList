import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo}</p>
      </div>
    );
  }
}

export default Todo;
