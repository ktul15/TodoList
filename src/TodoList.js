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
  }
  addTodo(todo) {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo todo={todo} />;
    });
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
