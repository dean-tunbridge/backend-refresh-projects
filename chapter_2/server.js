const express = require('express')
const app = express()
const PORT = 3000

let data = {
  name: 'Bean',
}

// website endpoints
app.get('/', (req, res) => {
  res.send(`
    <body>
    <p>${JSON.stringify(data)}</p>
    </body>
    `)
})

app.get('/dashboard', (req, res) => {
  res.send('<h1>DAshboard</h1>')
})

// API endpoints
app.get('/api/data', (req, res) => {
  console.log('this one is for data')
  res.send(data)
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`)
})
