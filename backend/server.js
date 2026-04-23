const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST
app.post("/tasks", (req, res) => {
    const task = {
        id: Date.now(),
        text: req.body.text,
        done: false
    };
    tasks.push(task);
    res.json(task);
});

// PUT
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.text = req.body.text ?? task.text;
        task.done = req.body.done ?? task.done;
        res.json(task);
    } else {
        res.status(404).send("Not found");
    }
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));