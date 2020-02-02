import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }
  handleRemove() {
    this.props.deleteTodo(this.props.id);
  }
  handleToggle() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  handleCompleted() {
    this.props.toggleCompletion(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleCompleted}
            className={this.props.completed ? "completed" : ""}
          >
            {this.props.task}
          </li>
          <button onClick={this.handleToggle}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
