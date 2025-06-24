const mysql = require("mysql2/promise")
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require("./env")

// 创建 MySQL 连接池
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

// 测试数据库连接
pool.getConnection()
    .then((conn) => {
        console.log("✅ 成功连接到 MySQL 数据库")
        conn.release()
    })
    .catch((err) => {
        console.error("❌ 无法连接到 MySQL 数据库:", err.message)
    })

module.exports = pool
