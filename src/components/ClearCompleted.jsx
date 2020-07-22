import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class ClearCompleted extends Component {
  render() {
    return todoStore.todos.findIndex((todo) => todo.completed === true) !==
      -1 ? (
      <div
        className="clear-completed"
        onClick={() => todoStore.clearCompleted()}
      >
        Clear completed
      </div>
    ) : null;
  }
}

export default ClearCompleted;
