const todos = ["Do laundry", "Have lunch", "Read a book"];

function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.forEach((val, idx) => {
        console.log(val);
      });
      resolve();
    }, 2000);
  });
}

function createATodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      resolve();
    }, 3000);
  });
}

(async () => {
  await getTodos();
  await createATodo("Watch Netflix");
  await getTodos();
})();
