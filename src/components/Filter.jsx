import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Filter extends Component {
  render() {
    return (
      <li onClick={() => todoStore.changeFilter(this.props.filter)}>
        <a
          className={todoStore.filter === this.props.filter ? "selected" : null}
          href=""
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          {this.props.filter}
        </a>
      </li>
    );
  }
}

export default Filter
