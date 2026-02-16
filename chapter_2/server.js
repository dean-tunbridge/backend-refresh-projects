const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  console.log('Hit an endpoint', req.method)
  res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
  console.log('Hit /dashboard endpoint')
  res.send('HELLO')
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`)
})
