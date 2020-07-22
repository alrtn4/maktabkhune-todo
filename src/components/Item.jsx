import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoModel from "./../stores/TodoModel";
import todoStore from "./../stores/TodoStore";

@observer
class Item extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
            onClick={() => {
              todo.toggle();
            }}
          />
          <label>{todo.title}</label>
          <button
            className="destroy"
            onClick={() => {
              todoStore.clear(todo.id);
            }}
          />
        </div>
      </li>
    );
  }
}

export default Item;
