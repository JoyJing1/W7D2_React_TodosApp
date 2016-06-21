let _todos = {};
let _callbacks = [];

const TodoStore = {
  changed: function() {
    _callbacks.forEach(callback => {
      callback();
    });
  },

  addChangedHandler: function(callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function(callback) {
    _callbacks.forEach( (cb, i) => {
      if (callback === cb) {
        _callbacks = _callbacks.slice(0, i)
                    .concat(_callbacks
                    .slice(i+1));
      }
    });
  },

  all: function() {
    return _todos;
  },

  fetch: function() {
    $.ajax({
      url: "/api/todos",
      method: "GET",
      dataType: "JSON",
      success: function (data) {
        _todos = {};

        data.forEach(d => {
          _todos[d.id] = d;
        });

        TodoStore.changed();

        console.log(TodoStore.all());
      }
    });
  },

  create: function(todo) {
    $.ajax({
      url: "/api/todos",
      method: "POST",
      dataType: "JSON",
      data: {"todo": todo},
      success: function(data) {
        _todos[data.id] = todo;
        TodoStore.changed();
      }
    });
  },

  destroy: function(id) {
    if (Object.keys(_todos).includes(id.toString())) {
      let todo = _todos[id];

      $.ajax({
        url: `/api/todos/${id}`,
        method: "DELETE",
        dataType: "JSON",
        data: {"todo": todo},
        success: function() {

          delete _todos[id.toString()];
          TodoStore.changed();
        }
      });

    }
  },

  toggleDone: function(id) {
    let todo = _todos[id];
    todo.done = !todo.done;

    $.ajax({
      url: `/api/todos/${id}`,
      method: "PATCH",
      dataType: "JSON",
      data: {"todo": todo},
      success: function() {
        TodoStore.changed();
      }
    });
  }

};

module.exports = TodoStore;
