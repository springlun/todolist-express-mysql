const express = require("express")
const router = express.Router()
const taskController = require("../controllers/taskController")

// 任务路由
router.get("/", taskController.getAllTasks)
router.get("/:id", taskController.getTaskById)
router.post("/", taskController.createTask)
router.put("/:id", taskController.updateTask)
router.delete("/:id", taskController.deleteTask)

module.exports = router
