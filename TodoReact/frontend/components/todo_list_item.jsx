const React = require("react");
const TodoStore = require("../stores/todo_store");

const TodoListItem = React.createClass({
  handleDestroy(event) {
    let id = parseInt(event.target.id);

    TodoStore.destroy(id);
  },

  handleDone(event) {
    let id = parseInt(event.target.id);

    TodoStore.toggleDone(id);
  },

  render: function() {
    let doneText = this.props.done ? "Undo" : "Done";

    return(
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.body}</div>

        <button onClick={this.handleDestroy} id={this.props.id}>DELETE!</button>
        <button onClick={this.handleDone} id={this.props.id}>{doneText}</button>
      </div>
    );
  }

});

module.exports = TodoListItem;
