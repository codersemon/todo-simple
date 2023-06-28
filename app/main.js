// task input
let newTask = document.getElementById("taskName");
// task save button
const addTask = document.getElementById("saveTask");
// task list wrapper
const taskList = document.getElementById("taskWrap");

/*******************
 * Add new task
 *******************/
addTask.addEventListener("click", () => {
  let newTaskVal = newTask.value.trim(); // removing empty space from input

  if (newTaskVal.length > 0) {
    let taskItem = document.createElement("tr");
    taskItem.innerHTML = `
      <td class="text-center">${taskList.children.length + 1}</td>
      <td>${newTaskVal}</td>
      <td class="text-center"><span class="s-pending">Pending</span></td>
      <td class="text-center">
          <button class="delete btn">Delete</button>
          <button class="complete btn">Complete</button>
      </td>
      `;

    // add class to tr 
    taskItem.classList.add('task-item');
    // append task to list
    taskList.append(taskItem);

    // clear input after adding to list
    newTask.value = "";

    deleteFunc();
    completeFunc();
    noTaskChecker();
  } else {
    newTask.style.borderColor = "red";
  }
});

/*******************
 * Delete Task
 *******************/
function deleteFunc() {
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.parentElement.remove();
    });
  });
}

/**************
 * complete task
 *************/
function completeFunc() {
  const completeBtn = document.querySelectorAll(".complete");
  completeBtn.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.previousElementSibling.innerHTML =
        '<span class="s-complete">Completed</span>';
      item.remove();
    });
  });
}

/************
 * Show no item msg
 ************/
function noTaskChecker() {
  if (taskWrap.children.length == 0) {
    let item = document.createElement("tr");
    item.innerHTML =
      '<td colspan="4" class="text-center notask">no task added!</td>';
    item.classList.add('no-task-td')
    taskWrap.append(item);
  }else{
    document.querySelector('.no-task-td').remove();
  }
}
noTaskChecker();
