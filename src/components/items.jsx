import React, { Component } from "react";
import Item from "./Item";
import { observer } from "mobx-react";
import todoStore from "./../stores/TodoStore";

@observer
class Items extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {todoStore.todos.map((todo) => {
            if (todoStore.filter === "All") {
              return <Item todo={todo} />;
            } else if (
              todoStore.filter === "Active" &&
              todo.completed === false
            ) {
              return <Item todo={todo} />;
            } else if (
              todoStore.filter === "Completed" &&
              todo.completed === true
            ) {
              return <Item todo={todo} />;
            }
            // return null;
          })}
        </ul>
      </section>
    );
  }
}

export default Items;
