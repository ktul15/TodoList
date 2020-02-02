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
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  updateTodo(id, updatedTask) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          task={todo.task}
          id={todo.id}
          completed={todo.completed}
          deleteTodo={this.deleteTodo}
          addTodo={this.addTodo}
          updateTodo={this.updateTodo}
          toggleCompletion={this.toggleCompletion}
        />
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
