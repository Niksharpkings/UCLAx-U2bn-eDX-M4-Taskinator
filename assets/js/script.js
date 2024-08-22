let formEl = document.querySelector("#task-form");

let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function() {
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);

console.log(window.document);
console.dir(window.document);
