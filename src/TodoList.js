import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo(todo) {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo task={todo.task} id={todo.id} deleteTodo={this.deleteTodo} />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
