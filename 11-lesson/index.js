const taskList1 = [];
const taskList2 = [];
const taskList = [];

function addTask() {
  const task = document.querySelector(".js-task-name-1").value;
  if (task != null) {
    taskList1.push(task);
    console.log(taskList1);
    document.querySelector(".js-task-name-1").value = "";
  }
}

function addTask2() {
  const task = document.querySelector(".js-task-name-2").value;

  if (task != null) {
    taskList2.push(task);
    document.querySelector(".js-task-name-2").value = "";
  }

  let htmlTask = ``;

  for (let i = 0; i < taskList2.length; i++) {
    htmlTask += `<p>${taskList2[i]}</p>`;
  }
  document.querySelector(".tasks").innerHTML = `${htmlTask}`;
}

function addTask3() {
  const taskName = document.querySelector(".js-task-name").value;
  const taskDate = document.querySelector(".js-due-date").value;

  if (taskName != "" && taskDate != null) {
    taskList.push({ taskName, taskDate });
    document.querySelector(".js-task-name").value = "";
    console.log(taskList);
  }
  previewTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  console.log(taskList);
  previewTasks();
}

function previewTasks() {
  let htmlTask = ``;

  //for (let i = 0; i < taskList.length; i++) {
  //  const { taskName, taskDate } = taskList[i];
  taskList.forEach(function (task, index) {
    const { taskName, taskDate } = task;
    htmlTask += `
      <div class="task-${index}">${taskName}</div>
      <div class="task-${index}">${taskDate}</div>
      <button  class="delete-button"
onclick="deleteTask(${index})">Delete</button>
    `;
  });
  document.querySelector(".tasks").innerHTML = `${htmlTask}`;
}
