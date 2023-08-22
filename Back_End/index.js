const express = require('express')
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

const mongo = require('./DB_Mongo/conn')
mongo()

const mainRouter = require('./Router/mainRouter')
app.use('/api', mainRouter)

app.listen(3000,()=>{
    console.log('Server funcionando!')
})