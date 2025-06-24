const pool = require("../config/database")
const { nanoid } = require("nanoid")

const User = {
    //获取所有用户
    async getAll() {
        const [rows] = await pool.query(
            "SELECT id, username, email, create_time FROM users"
        )
        return rows
    },
    //根据id查询用户
    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
            id,
        ])
        return rows[0]
    },
    //注册方法
    async register(user) {
        const { username, password } = user
        const newId = nanoid(10)
        await pool.query(
            "INSERT INTO users (id,username, password,create_time) VALUES (?,?,?,?)",
            [newId, username, password, new Date()]
        )
        return this.getById(newId)
    },
    //更新用户
    async update(id, user) {
        const { username, email, password } = user
        const [result] = await pool.query(
            "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?",
            [username, email, password, id]
        )
        if (result.affectedRows === 0) {
            return null
        }
        return this.getById(id)
    },
    //注销方法
    async delete(id) {
        const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
            id,
        ])
        return result.affectedRows > 0
    },

    // 检查邮箱是否已存在
    async emailExists(email, excludeId = null) {
        let query = "SELECT id FROM users WHERE email = ?"
        const params = [email]

        if (excludeId) {
            query += " AND id != ?"
            params.push(excludeId)
        }

        const [rows] = await pool.query(query, params)
        return rows.length > 0
    },
}

module.exports = User
