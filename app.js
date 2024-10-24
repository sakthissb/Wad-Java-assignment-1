// Selecting the necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener to add a new task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (task)
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    // Append the task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';

    // Add event listeners to complete and remove buttons
    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.remove-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
