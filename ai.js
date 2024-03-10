// Create an empty array to store tasks
let todoList = [];

// Function to add a new task to the ToDo list
function addTask(task) {
    todoList.push(task);
    console.log("Task added:", task);
}

// Function to remove a task from the ToDo list
function removeTask(task) {
    let index = todoList.indexOf(task);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log("Task removed:", task);
    } else {
        console.log("Task not found:", task);
    }
}

// Function to display all tasks in the ToDo list
function displayTasks() {
    console.log("Tasks in ToDo list:");
    todoList.forEach(task => console.log("- " + task));
}

// Add some tasks to the ToDo list
addTask("Wash dishes");
addTask("Do homework");
addTask("Go to the grocery store");

// Display all tasks in the ToDo list
displayTasks();

// Remove one of the tasks from the ToDo list
removeTask("Do homework");

// Display the updated tasks in the ToDo list
displayTasks();
