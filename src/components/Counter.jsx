import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  render() {
    let num = 0;
    return (
      <div className="todo-count">
        <strong>
          {todoStore.todos.forEach((todo) => {
            if (todo.completed === false) {
              num++;
            }
          })}
          {num}
        </strong>{" "}
        items left
      </div>
    );
  }
}

export default Counter;
