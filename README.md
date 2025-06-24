# 项目说明

该项目使用 express 框架 + MySQL 数据库，对 用户表以及任务表 实现增删改查操作
运行前请先将目录中的 .sql 文件导入数据库，然后项目中安装：
- express
- mysql2
- cors
- nanoid

# 项目结构

todolist-express-mysql/

├── config/

│  ├── database.js             # 数据库配置

│  └── env.js                  # 环境配置

├── controllers/

│  └── userController.js   # 用户控制器
│  └── taskController.js   # 任务控制器
│  └── tagController.js    # tag控制器

├── models/

│  └── userModel.js          # 用户模型
│  └── taskModel.js          # 任务模型
│  └── tagModel.js           # tag模型

├── routes/

│  └── userRoutes.js        # 用户路由
│  └── taskRoutes.js        # 任务路由
│  └── tagRoutes.js         # tag路由

├── app.js                  # 主应用文件

├── package.json

└── README.md

└── users.sql               # 数据库文件
└── tasks.sql               # 数据库文件
└── tags.sql                # 数据库文件

# API说明

关于用户

| 方法   | 路径           | 描述         |
| ------ | -------------- | ------------ |
| GET    | /api/users     | 获取所有用户 |
| GET    | /api/users/:id | 获取单个用户 |
| POST   | /api/users     | 创建新用户   |
| PUT    | /api/users/:id | 更新用户信息 |
| DELETE | /api/users/:id | 删除用户     |

关于任务

| 方法   | 路径           | 描述         |
| ------ | -------------- | ------------|
| GET    | /api/tasks     | 获取所有任务 |
| GET    | /api/tasks/:id | 获取单个任务 |
| POST   | /api/tasks     | 创建新任务   |
| PUT    | /api/tasks/:id | 更新任务     |
| DELETE | /api/tasks/:id | 删除任务     |

关于 tag

| 方法   | 路径           | 描述         |
| ------ | -------------- | ------------|
| GET    | /api/tags     | 获取所有 tag |
| GET    | /api/tags/:id | 获取单个 tag |
| POST   | /api/tags     | 创建新 tag   |
| DELETE | /api/tags/:id | 删除 tag    |

# 数据库
ID 采用字符串格式
