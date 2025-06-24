const Task = require("../models/taskModel")

// 获取所有任务
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.getAll()
        if (!tasks) {
            return res.status(404).json({ error: "没有任务" })
        }
        res.json(tasks)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "获取任务列表失败" })
    }
}
// 获取单个任务
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.getById(req.params.id)
        if (!task) {
            return res.status(404).json({ error: "任务不存在" })
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({ error: "获取任务失败" })
    }
}

// 新增任务
exports.createTask = async (req, res) => {
    try {
        const { user_id, title, content, due_date } = req.body
        // 验证必填字段
        if (!title || !content) {
            return res.status(400).json({ error: "标题、详情是必填项" })
        }
        const newTask = await Task.add({
            user_id,
            title,
            content,
            due_date,
        })
        res.status(201).json(newTask)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "新增任务失败" })
    }
}
// 更新任务
exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const { title, content, done, due_date, is_important } = req.body

        // 检查任务是否存在
        const existingTask = await Task.getById(taskId)
        if (!existingTask) {
            return res.status(404).json({ error: "任务不存在" })
        }

        const updateTask = await Task.update(taskId, {
            title: title || existingTask.title,
            content: content || existingTask.content,
            done: done || existingTask.done,
            due_date: due_date || existingTask.due_date,
            is_important: is_important || existingTask.is_important,
        })

        res.json(updateTask)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "更新任务失败" })
    }
}

// 删除任务
exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id

        // 检查任务是否存在
        const existingTask = await Task.getById(taskId)
        if (!existingTask) {
            return res.status(404).json({ error: "任务不存在" })
        }
        const deleted = await Task.delete(taskId)
        if (!deleted) {
            return res.status(500).json({ error: "删除任务失败" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: "删除任务失败" })
    }
}
