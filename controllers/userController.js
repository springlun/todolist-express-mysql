const User = require("../models/userModel")

// 获取所有用户
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll()
        if (!users) {
            return res.status(404).json({ error: "没有用户" })
        }
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: "获取用户列表失败" })
    }
}
// 获取单个用户
exports.getUserById = async (req, res) => {
    try {
        const user = await User.getById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "用户不存在" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: "获取用户信息失败" })
    }
}
// 创建用户
exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body
        // 验证必填字段
        if (!username || !password) {
            return res.status(400).json({ error: "姓名、密码是必填项" })
        }
        const newUser = await User.register({ username, password })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: "创建用户失败" })
    }
}
// 更新用户
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const { username, email, password } = req.body

        // 检查用户是否存在
        const existingUser = await User.getById(userId)
        if (!existingUser) {
            return res.status(404).json({ error: "用户不存在" })
        }

        // 检查邮箱是否已被其他用户使用
        if (email && email !== existingUser.email) {
            if (await User.emailExists(email, userId)) {
                return res.status(400).json({ error: "邮箱已被使用" })
            }
        }

        const updateUser = await User.update(userId, {
            username: username || existingUser.name,
            email: email || existingUser.email,
            password: password || existingUser.password,
        })

        res.json(updateUser)
    } catch (error) {
        res.status(500).json({ error: "更新用户失败" })
    }
}
// 删除用户
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id

        // 检查用户是否存在
        const existingUser = await User.getById(userId)
        if (!existingUser) {
            return res.status(404).json({ error: "用户不存在" })
        }
        const deleted = await User.delete(userId)
        if (!deleted) {
            return res.status(500).json({ error: "删除用户失败" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: "删除用户失败" })
    }
}
