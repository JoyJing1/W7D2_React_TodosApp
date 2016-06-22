const React = require("react");
const TodoStore = require("../stores/todo_store");
const TodoListItem = require("./todo_list_item");
const TodoListForm = require("./todo_form");

const TodoList = React.createClass({
  todosChanged() {
    this.setState({todoStores: TodoStore.all()});
  },

  getInitialState() {
    return {todoStores: {} };
  },

  componentDidMount() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render() {
    return (
      <div>
          {
            Object.keys(this.state.todoStores).map((key) => {
              let todo = this.state.todoStores[key];
              return <TodoListItem
                      title={todo.title}
                      body={todo.body}
                      done={todo.done}
                      id={todo.id}
                      key={todo.title + todo.body}/>;
            })
          }
        <TodoListForm />
      </div>
    );
  }
});

module.exports = TodoList;
