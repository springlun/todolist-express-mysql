# 项目说明

该项目使用 express 框架 + MySQL 数据库，对用户表实现增删改查操作

# 项目结构

todolist-express-mysql/

├── config/

│  ├── database.js             # 数据库配置

│  └── env.js                       # 环境配置

├── controllers/

│  └── userController.js   # 用户控制器

├── models/

│  └── userModel.js          # 用户模型

├── routes/

│  └── userRoutes.js        # 用户路由

├── app.js                         # 主应用文件

├── package.json

└── README.md

└── users.sql                  # 数据库文件

**# 接口说明**

GET   /api/users    获取所有用户

GET   /api/users/:id  获取单个用户

POST   /api/users    创建新用户

PUT   /api/users/:id  更新用户信息

DELETE  /api/users/:id  删除用户

# API说明

| 方法   | 路径           | 描述         |
| ------ | -------------- | ------------ |
| GET    | /api/users     | 获取所有用户 |
| GET    | /api/users/:id | 获取单个用户 |
| POST   | /api/users     | 创建新用户   |
| PUT    | /api/users/:id | 更新用户信息 |
| DELETE | /api/users/:id | 删除用户     |

# 数据库