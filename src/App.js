import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/items";
import Footer from './components/Footer'
import todoStore from './stores/TodoStore';

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <Header />
        <Items />
        {todoStore.todos.length > 0 ? <Footer /> : null}
      </div>
    );
  }
}

export default App;
