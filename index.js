const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api')

const app = express()

require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({
    origin: "http://localhost:4200"
}))

app.get('/', (req,res) => {
    res.send('sape')
})

app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log('server corriendo');
})