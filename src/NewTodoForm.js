import React, { Component } from "react";

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
    this.props.addTodo(this.state.todo);
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
