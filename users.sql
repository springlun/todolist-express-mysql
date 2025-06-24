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

 Date: 24/06/2025 15:26:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户ID',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码值',
  `create_time` datetime NULL DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('24upJEGtW-', '张三', NULL, '12345', '2025-06-24 12:37:48');
INSERT INTO `users` VALUES ('6OQPtZlVEa', '张三1', NULL, '12345', '2025-06-24 12:38:38');
INSERT INTO `users` VALUES ('6VNNp9jG4A', '张三3', NULL, '12345', '2025-06-24 13:33:58');
INSERT INTO `users` VALUES ('9Yx3WsBj35', '张三3000', NULL, '12345', '2025-06-24 15:04:03');
INSERT INTO `users` VALUES ('fXx4kRuDtW', '张三3', NULL, '12345', '2025-06-24 13:40:27');
INSERT INTO `users` VALUES ('iBQIy-9MV3', '张三3', NULL, '12345', '2025-06-24 13:44:53');
INSERT INTO `users` VALUES ('IIfkllegj8', '张三3', NULL, '12345', '2025-06-24 13:40:05');
INSERT INTO `users` VALUES ('mCB3d5RAUF', '张三3', NULL, '12345', '2025-06-24 13:40:32');
INSERT INTO `users` VALUES ('pKQzuwb8z5', '张三232323232323', NULL, '12345', '2025-06-24 15:06:49');
INSERT INTO `users` VALUES ('tNHxc4OhFa', '张三3000', NULL, '12345', '2025-06-24 15:02:57');

SET FOREIGN_KEY_CHECKS = 1;
