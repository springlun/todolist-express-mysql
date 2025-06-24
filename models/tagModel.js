const pool = require("../config/database")
const { nanoid } = require("nanoid")

const Tag = {
    //获取所有tag
    async getAll() {
        const [rows] = await pool.query("SELECT id, name, user_id  FROM tags")
        return rows
    },
    //根据id查询tag
    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM tags WHERE id = ?", [id])
        return rows[0]
    },
    //新增tag
    async add(tag) {
        const { name, user_id } = tag
        const newId = nanoid(10)
        await pool.query("INSERT INTO tags (id,name, user_id) VALUES (?,?,?)", [
            newId,
            name,
            user_id,
        ])
        return this.getById(newId)
    },
    //删除tag
    async delete(id) {
        const [result] = await pool.query("DELETE FROM tags WHERE id = ?", [id])
        return result.affectedRows > 0
    },
}

module.exports = Tag
