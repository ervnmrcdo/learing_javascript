const taskList1 = [];
const taskList2 = [];

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
