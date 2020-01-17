import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    return (
      <div>
        <form className="input-area" onSubmit={this.props.onSubmit}>
          <input value={this.props.element} onChange={this.props.onChange} />
          <button>Add-Item</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
