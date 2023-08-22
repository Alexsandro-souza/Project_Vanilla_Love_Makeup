const express = require('express')
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

const mongo = require('./DB_Mongo/conn')
mongo()

const mainRouter = require('./Router/mainRouter')
app.use('/api', mainRouter)

app.get('/test', (req, res)=>{
    return res.json({msg : 'Funcionando'})
})

app.listen(3333,()=>{
    console.log('Server funcionando!')
})