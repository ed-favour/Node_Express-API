const express = require('express')
const bodyParser = require('body-parser')
// const users = require('./routes/users.js')
const usersRoutes = require('./routes/users.js')
const app = express();
const port = 4000;

app.use(bodyParser.json())

app.use('/users', usersRoutes)
app.get('/', (req, res) => {
    res.send("Hello from Homepage")
}) 

// router.get('/confirmation', (req, res) => {
//     res.end("Your confirmation")
// })

app.listen(port, console.log(`server is runing on port: http://localhost:${port}`));