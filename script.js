document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector(".tasks");
    const pushButton = document.querySelector("#push");

    // Add task when Enter is pressed
    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    });

    // Add task when button is clicked
    pushButton.addEventListener("click", createTask);

    function createTask() {
        if (taskInput.value.length == 0) {
            alert("The task field is blank. Enter a task name and try again.");
            return;
        }

        // Create task element
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        // Create task content
        taskDiv.innerHTML = `
            <label class="taskname">
                <input type="checkbox" id="check-task">
                <p>${taskInput.value}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        `;

        // Add click handler for checkbox
        const checkbox = taskDiv.querySelector('#check-task');
        checkbox.addEventListener('click', function() {
            this.parentElement.querySelector('p').classList.toggle('checked');
        });

        // Add click handler for delete button
        const deleteBtn = taskDiv.querySelector('.delete');
        deleteBtn.addEventListener('click', function() {
            taskDiv.remove();
            updateScroll();
        });

        // Add task to list
        taskSection.appendChild(taskDiv);
        
        // Clear input
        taskInput.value = '';
        
        // Update scroll
        updateScroll();
    }

    function updateScroll() {
        if (taskSection.offsetHeight >= 300) {
            taskSection.classList.add("overflow");
        } else {
            taskSection.classList.remove("overflow");
        }
    }
});