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
router.post('/', (req, res) => {})

//Update todo
router.put('/:id', (req, res) => {})

//Delete todo
router.delete('/:id', (req, res) => {})

export default router
