const express = require("express")
const cors = require("cors")
const path = require("path")

const userRoutes = require("./routes/userRoutes")
const taskRoutes = require("./routes/taskRoutes")
const tagRoutes = require("./routes/tagRoutes")
const { PORT } = require("./config/env")

const app = express()

// 中间件配置
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, "public")))

// 简单日志中间件
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
    next()
})

// 用户路由
app.use("/api/users", userRoutes)
// 任务路由
app.use("/api/tasks", taskRoutes)
// tag路由
app.use("/api/tags", tagRoutes)

// 404 处理
app.use((req, res) => {
    res.status(404).json({ error: "未找到该资源" })
})

app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
    console.log(`📝 用户API地址: http://localhost:${PORT}/api/users`)
    console.log(`📝 任务API地址: http://localhost:${PORT}/api/tasks`)
    console.log(`📝 tagAPI地址: http://localhost:${PORT}/api/tags`)
})
