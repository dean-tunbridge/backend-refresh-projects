import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

// /auth/register
router.post('/register', (req, res) => {
  const { username, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 8)
  res.sendStatus(201)
})

// /auth/login
router.post('/login', (req, res) => {
  const {} = req.body
  res.sendStatus(201)
})

export default router
