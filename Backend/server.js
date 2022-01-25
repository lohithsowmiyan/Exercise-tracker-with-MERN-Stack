const express = require('express')
const app = express()
//const { MongoClient } = require('mongodb');
require('dotenv').config()

const mongoose = require('mongoose')

const cors = require('cors');

app.use(cors())
app.use(express.json())

const uri = process.env.URI

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true })
const connection= mongoose.connection
connection.once('open',()=>{
    console.log('Connection established')
})

const username = require('./routes/users')
const exercises = require('./routes/exercises')

app.use('/users',username)
app.use('/exercises',exercises);

const port = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})

