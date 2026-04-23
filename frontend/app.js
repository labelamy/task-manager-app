let tasks = [];
let filter = "all";

async function loadTasks() {
    const res = await fetch("http://localhost:3000/tasks");
    tasks = await res.json();
    render();
}

async function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") return;

    await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: input.value })
    });

    input.value = "";
    loadTasks();
}

async function toggleTask(id, done) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ done: !done })
    });

    loadTasks();
}

async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

async function editTask(id, oldText) {
    const newText = prompt("Modifier la tâche :", oldText);

    if (!newText || newText.trim() === "") return;

    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: newText })
    });

    loadTasks();
}

function setFilter(newFilter) {
    filter = newFilter;
    render();
}

function getFilteredTasks() {
    if (filter === "active") return tasks.filter(t => !t.done);
    if (filter === "done") return tasks.filter(t => t.done);
    return tasks;
}

function render() {
    const list = document.getElementById("taskList");
    const counter = document.getElementById("counter");

    list.innerHTML = "";

    let filteredTasks = getFilteredTasks();

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span style="text-decoration: ${task.done ? 'line-through' : 'none'}">
                ${task.text}
            </span>
            <button onclick="toggleTask(${task.id}, ${task.done})">✔</button>
            <button onclick="editTask(${task.id}, '${task.text}')">✏️</button>
            <button onclick="deleteTask(${task.id})">❌</button>
        `;

        list.appendChild(li);
    });

    const remaining = tasks.filter(t => !t.done).length;
    counter.innerText = remaining + " tâche(s) restante(s)";
}

loadTasks();