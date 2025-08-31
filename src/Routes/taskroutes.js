const express = require("express");
const router = express.Router();
const taskController = require("../Models/taskController");

// CREATE task
router.post("/", taskController.createTask);

// GET all tasks
router.get("/", taskController.getTasks);

// GET single task
router.get("/:id", taskController.getTaskById);

// UPDATE task
router.put("/:id", taskController.updateTask);

// DELETE task
router.delete("/:id", taskController.deleteTask);

module.exports = router;