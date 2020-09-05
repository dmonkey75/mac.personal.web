const express = require('express')
const app = express()
//const cors = require("cors");
var path = require('path');

require('dotenv').config()
const morgan = require('morgan')

const port = normalizePort(process.env.port || '9000');

app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(cors());
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(morgan('dev'))

app.use('/mail', require('./routes/sendMail'))
  
// app.use('/', (req, res, next) => {
//     res.render('index', { title: 'Welcome to my Nodejs App Powered by Express', author: 'Michael Cajandig' }); 
// })

app.listen(port, () => {
  console.log(`Application is running on ${port}`)
})

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json())

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}