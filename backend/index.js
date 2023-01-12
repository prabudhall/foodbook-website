const express = require('express')
const app = express()
const port = 5000
const mdb = require("./mongocon");
mdb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})