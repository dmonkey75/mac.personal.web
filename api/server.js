const express = require('express')
const app = express()
const cors = require("cors");
require('dotenv').config()
const morgan = require('morgan')

const port = normalizePort(process.env.PORT || '9000');
app.set('port', port);

app.use(cors());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(morgan('dev'))

app.use('/mail', require('./routes/sendMail'))

app.listen(port, () => {
    console.log(`Application is running on ${port}`)
})

app.use(express.json())