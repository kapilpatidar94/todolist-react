import React, { Component } from "react";

class TodoItem extends Component {
  lineThrough = item => {
    return item.status
      ? { textDecorationLine: "line-through" }
      : { textDecorationLine: "none" };
  };

  ind = 0;
  render() {
    return this.props.items.map((item, index) => (
      <li key={index} id={index} className="list-item">
        <input
          type="checkbox"
          onClick={this.props.onClick}
          {...(item.status ? { checked: true } : {})}
        />
        <div style={this.lineThrough(item)}>{item.item}</div>
        <button onClick={this.props.removeItem}>x</button>
      </li>
    ));
  }
}

export default TodoItem;
