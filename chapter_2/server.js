const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('<h1>This is html code</h1><input></input>')
})

app.get('/dashboard', (req, res) => {
  console.log('Hit /dashboard endpoint')
  res.send('HELLO')
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`)
})
