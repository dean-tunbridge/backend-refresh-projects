import express from 'express'
import db from '../db.js'

const router = express.Router()

//Get all todo
router.get('/', (req, res) => {
  const getTodos = db.prepare('SELECT * FROM todos WHERER user_id = ?')
  const todos = getTodos.all(req.userId)
  res.json(todos)
})

//Create new todo
router.post('/', (req, res) => {
  const { task } = req.body
  const insertTodo = db.prepare(
    `INSERT INTO todos WHERE (user_id, task) VALUES (? , ?)`,
  )
  const result = insertTodo.run(req.userId, task)

  res.json({ id: result.lastInsertRowid, task, completed: 0 })
})

//Update todo
router.put('/:id', (req, res) => {})

//Delete todo
router.delete('/:id', (req, res) => {})

export default router
