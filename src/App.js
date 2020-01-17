import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

class App extends Component {
  state = {
    element: "",
    items: JSON.parse(localStorage.getItem("items")) || []
  };
  refreshLocalStorage() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  onChange = event => {
    this.setState({ element: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.element.length > 0) {
      let obj = { item: this.state.element, status: false };
      this.state.items.push(obj);
      this.setState(
        {
          element: "",
          items: this.state.items
        },
        this.refreshLocalStorage()
      );
    }
  };

  onClick = event => {
    console.log(event.target.checked);
    event.stopPropagation();
    let index = parseInt(event.target.parentNode.id);
    this.setState({
      items: this.state.items.map((item, ind) => {
        if (index === ind) {
          item.status = event.target.checked;
        }
        return item;
      }, this.refreshLocalStorage())
    });
  };

  removeItem = event => {
    let ind = parseInt(event.target.parentNode.id);
    this.state.items.splice(ind, 1);
    this.setState(
      {
        items: this.state.items
      },
      this.refreshLocalStorage()
    );
  };

  render() {
    return (
      <div className="App">
        <h1 className="logo">To-Do-List</h1>
        <TodoInput
          element={this.state.element}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />

        <ul>
          {
            <TodoItem
              items={this.state.items}
              
              onClick={this.onClick}
              removeItem={this.removeItem}
            />
          }
        </ul>
      </div>
    );
  }
}

export default App;
