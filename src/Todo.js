import React, { Component } from "react";
// import NewTodoForm from "./NewTodoForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div className="Todo">
        <p>{this.props.task}</p>
        <button>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}

export default Todo;
