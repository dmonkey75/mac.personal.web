const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan') 
const port = 4444

app.use(morgan('dev'))

app.use('/mail', require('./routes/sendMail'))

app.listen(port, () => {
    console.log(`Application is running on ${port}`)
})

app.use(express.json())