import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import ClearCompleted from "./ClearCompleted";
import Filter from "./Filter";
import Counter from "./Counter";

@observer
class Footer extends Component {
  render() {
    let num = 0;
    return (
      <div className="footer">
        <Counter />
        <div>
          <ul className="filters">
            <Filter filter='All' />
            <Filter filter='Active' />
            <Filter filter='Completed' />
          </ul>
        </div>
        <ClearCompleted />
      </div>
    );
  }
}

export default Footer;
