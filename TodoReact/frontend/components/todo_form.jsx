const React = require("react");
const TodoListItem = require("./todo_list_item");
const TodoStore = require("../stores/todo_store");

const TodoListForm = React.createClass({
  getInitialState: function() {
    return {title: "", body: "", done: false};
  },

  updateTitle: function(event) {
    this.setState({title: event.target.value});
  },

  updateBody: function(event) {
    this.setState({body: event.target.value});
  },

  updateDone: function(event) {
    let done = false;
    if (event.target.value === "true") {
      done = true;
    }
    this.setState({done: done});
  },

  handleSubmit: function(event) {
    TodoStore.create(this.state);

    this.setState({title: "", body: "", done: false});
  },
  
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        Title: <input type="string" class="title" value={this.state.title} onChange={this.updateTitle}></input>
        <br></br>

        Body: <input type="text" class="body" value={this.state.body} onChange={this.updateBody}></input>
        <br></br>

        <label class="done" for="done">{"Done"}</label>
          <br></br>
          Yes<input type="radio" id="done" name="done" value="true" onClick={this.updateDone}></input>
          <br></br>
          No<input type="radio" id="done" name="done" value="false" onClick={this.updateDone}></input>

        <br></br>
        <input type="submit"></input>
      </form>
    );
  }

});

module.exports = TodoListForm;
