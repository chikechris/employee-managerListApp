const express = require('express')

const app = express()

app.get('/', (req, res)=> res.json({msg: `welcome`}))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server on port${PORT}`))