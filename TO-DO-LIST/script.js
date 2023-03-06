const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
      
addTaskBtn.addEventListener("click", function () {
    
    if (taskInput.value === ""){
        alert('Enter Task');
        return;
    }
    
    const task = `<li>${taskInput.value}<button class="delete-btn">Delete</button></li>`;
    
    taskList.insertAdjacentHTML("beforeend", task);
    taskInput.value = "";

});
      
taskList.addEventListener("click", function (event) {

    if (event.target.className === "delete-btn") {
        event.target.parentElement.remove();
    }
});