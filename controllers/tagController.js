const Tag = require("../models/tagModel")

// 获取所有tag
exports.getAllTags = async (req, res) => {
    try {
        const tags = await Tag.getAll()
        if (!tags) {
            return res.status(404).json({ error: "没有tag" })
        }
        res.json(tags)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "获取tag列表失败" })
    }
}
// 获取单个tag
exports.getTagById = async (req, res) => {
    try {
        const tag = await Tag.getById(req.params.id)
        if (!tag) {
            return res.status(404).json({ error: "tag不存在" })
        }
        res.json(tag)
    } catch (error) {
        res.status(500).json({ error: "获取tag失败" })
    }
}

// 新增tag
exports.createTag = async (req, res) => {
    try {
        const { name,user_id } = req.body
        // 验证必填字段
        if (!name) {
            return res.status(400).json({ error: "tag名必填项" })
        }
        const newTag = await Tag.add({
            name,
            user_id
        })
        res.status(201).json(newTag)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "新增tag失败" })
    }
}

// 删除tag
exports.deleteTag = async (req, res) => {
    try {
        const tagId = req.params.id

        // 检查tag是否存在
        const existingTag = await Tag.getById(tagId)
        if (!existingTag) {
            return res.status(404).json({ error: "任务不存在" })
        }
        const deleted = await Tag.delete(tagId)
        if (!deleted) {
            return res.status(500).json({ error: "删除tag失败" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: "删除tag失败" })
    }
}