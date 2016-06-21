const React = require("react");
const TodoListItem = require("./todo_list_item");

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
    let title = event.target.value.title;
    // Todo.create(); // insert data here

    this.setState({title: "", body: "", done: false});
  },

  render: function(){
    return(
      <form>
        This is my TODO List Form
      </form>
    );
  }

});

module.exports = TodoListForm;


// <input type="string"
//         class="title"
//         value={this.state.title}
//         onChange={TodoListForm.updateTitle}
//         >Title</input>
//
// <input type="text"
//         class="body"
//         value={this.state.body}
//         onChange={TodoListForm.updateBody}
//         >Body</input>
//
// <label class="done">Done
//   <input type="radio"
//           class="done"
//           value="true"
//           onClick={TodoListForm.updateDone}
//           >Yes</input>
//
//   <input type="radio"
//           class="done"
//           value="false"
//           onClick={TodoListForm.updateDone}
//           >No</input>
// </label>
//
// <input type="submit" onClick={TodoListForm.handleSubmit}></input>
