import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newTodo = { task: this.state.todo, id: uuid() };
    this.props.addTodo(newTodo);
    this.setState({
      todo: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todo} onChange={this.handleChange} />
        <button>Add a new Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
