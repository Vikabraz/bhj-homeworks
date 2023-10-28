const taskInput = document.getElementById("task__input"),
  taskList = document.getElementById("tasks__list"),
  addBtn = document.getElementById("tasks__add");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `;

    taskList.appendChild(task);

    const removeBtn = task.querySelector(".task__remove");
    removeBtn.addEventListener("click", removeTask);
    taskInput.value = "";
  }
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

function removeTask(e) {
  e.preventDefault();
  e.target.closest(".task").remove();
}
