const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const studentRouter = require('./controller/students')


//const url =  'mongodb://localhost:27017/EAD'  
//const url= 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101'
const url= 'mongodb+srv://marrishivani23:9502624404@cbit.qkyho.mongodb.net/?retryWrites=true&w=majority&appName=cbit'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
