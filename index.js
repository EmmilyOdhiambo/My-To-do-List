//Global variables
let tasks = [];

// Function to add a new task
function addTask(event) {
  event.preventDefault();
  
  const title = document.getElementById("task-title").value;
  const dueDate = document.getElementById("due-date").value;
  const status = document.getElementById("status").value;
  // const taskList = document.getElementById("task-list");
  
  const newTask = {
    title: title,
    dueDate: dueDate,
    status: status
  };
  
  tasks.push(newTask);
  displayTasks();
  
  // Reset the form
  document.getElementById("task-title").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("status").value = "Not started";
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
}
  
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <p>Title: ${task.title}</p>
      <p>Due Date: ${task.dueDate}</p>
      <p>Status: ${task.status}</p>
      <button onclick="completeTask(${index})">Complete</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
  
    if (task.status === "Completed") {
      taskItem.classList.add("completed");
    }
  })
    
    taskList.appendChild(taskItem);


    function completeTask(index) {
      tasks[index].status = "Completed";
      displayTasks();
    }
    
    // Function to delete a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      displayTasks();
    }
    
    // Add event listener to the form submission
    document.getElementById("add-task-form").addEventListener("submit", addTask);


    const fetchTasksBtn = document.getElementById("fetch-tasks-btn");
fetchTasksBtn.addEventListener("click", function () {
  const userId = document.getElementById("user-id").value;
  fetchTasks(userId);
});

const todoItem = document.getElementById('Task');
const todoText = todoItem.textContent;
console.log(todoText);
fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'pray',
    completed: false,
    userId: 30,
  })
})
.then(result => result.json())
.then(console.log);
