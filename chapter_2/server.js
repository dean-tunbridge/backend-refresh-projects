const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  console.log(req.method)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`)
})
