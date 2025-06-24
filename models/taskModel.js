const pool = require("../config/database")
const { nanoid } = require("nanoid")

const Task = {
    //获取所有任务
    async getAll() {
        const [rows] = await pool.query(
            "SELECT id,user_id,title,content,done,due_date,is_important,create_time,update_time FROM tasks"
        )
        return rows
    },
    //根据id查询任务
    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
            id,
        ])
        return rows[0]
    },
    //添加任务
    async add(task) {
        const { user_id, title, content, due_date } = task
        const newId = nanoid(10)
        await pool.query(
            "INSERT INTO tasks (id,user_id,title,content,done,due_date,is_important,create_time) VALUES (?,?,?,?,?,?,?,?)",
            [newId, user_id, title, content, 0, due_date, 0, new Date()]
        )
        return this.getById(newId)
    },
    //更新任务
    async update(id, task) {
        const { title, content, done, due_date, is_important } = task
        const [result] = await pool.query(
            "UPDATE tasks SET title = ?, content = ?, done = ?,due_date = ?,is_important = ?, update_time = ? WHERE id = ?",
            [title, content, done, due_date, is_important, new Date(), id]
        )
        if (result.affectedRows === 0) {
            return null
        }
        return this.getById(id)
    },
    //删除任务
    async delete(id) {
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
            id,
        ])
        return result.affectedRows > 0
    },
}

module.exports = Task
