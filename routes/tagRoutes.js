const express = require("express")
const router = express.Router()
const tagController = require("../controllers/tagController")

// tag路由
router.get("/", tagController.getAllTags)
router.get("/:id", tagController.getTagById)
router.post("/", tagController.createTag)
router.delete("/:id", tagController.deleteTag)

module.exports = router