const express = require("express")
const router = express.Router()
const { getAsync } = require("../redis")

router.get("/statistics", async (req, res) => {
  const count = Number(await getAsync("added_todos")) || 0
  res.json({ added_todos: count })
})

module.exports = router
