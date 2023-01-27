const todos = ["Do laundry", "Have lunch", "Read a book"];

function getTodos() {
  setTimeout(() => {
    todos.forEach((val, idx) => {
      console.log(val);
    });
  }, 2000);
}

function createATodo(todo, cb) {
  setTimeout(() => {
    todos.push(todo);
    cb();
  }, 3000);
}

createATodo("Watch Netflix", getTodos);
