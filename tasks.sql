/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80042 (8.0.42)
 Source Host           : localhost:3306
 Source Schema         : todolist

 Target Server Type    : MySQL
 Target Server Version : 80042 (8.0.42)
 File Encoding         : 65001

 Date: 24/06/2025 20:49:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '任务ID',
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '任务标题',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '任务详情',
  `done` tinyint(1) NULL DEFAULT NULL COMMENT '是否完成',
  `due_date` datetime NULL DEFAULT NULL COMMENT '截止日期',
  `is_important` tinyint(1) NULL DEFAULT NULL COMMENT '优先级',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES ('1', '24upJEGtW-', '第一', '第一', 0, '2025-06-19 19:38:44', 0, '2025-06-04 19:39:06', '2025-06-19 19:39:09');
INSERT INTO `tasks` VALUES ('9ZaEnSYVAs', '24upJEGtW-', '测试测试1', '试', 0, '2025-06-04 19:39:06', 0, '2025-06-24 20:39:42', NULL);
INSERT INTO `tasks` VALUES ('XoDBZmkc3V', '24upJEGtW-', '测试测试1', '试', 0, '2025-06-04 19:39:06', 0, '2025-06-24 20:35:08', NULL);

SET FOREIGN_KEY_CHECKS = 1;
