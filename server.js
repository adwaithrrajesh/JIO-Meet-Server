const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


const meetRouter  = require('./routes/meetRouter')

// Configuring port
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

app.use(morgan('dev'))

// Configuring Cors
app.use(cors({
    origin: '*',
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true
}));


app.use('/api/',meetRouter)


app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})