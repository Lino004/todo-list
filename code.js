document.getElementById("addTaskBtn").addEventListener("click", function() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.textContent = taskText;

    taskList.appendChild(newTask);

    input.value = ""; // Vider après ajout
});