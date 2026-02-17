const express = require('express')
const app = express()
const PORT = 3000

let data = {
  users: ['Bean'],
}

//Middleware
app.use(express.json())

// website endpoints
app.get('/', (req, res) => {
  res.send(`
    <h1>DATA</h1>
    <body>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard">Dashboard</href>
    </body>
    `)
})

app.get('/dashboard', (req, res) => {
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href="/">Home</href>
    </body>`)
})

// API endpoints
app.get('/api/data', (req, res) => {
  console.log('this one is for data')
  res.send(data)
})

app.post('/api/data', (req, res) => {
  const newData = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('last element deleted')
  res.sendStatus(202)
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`)
})
