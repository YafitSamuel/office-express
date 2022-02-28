require('dotenv').config();
const express=require('express')
const connection =require('./DB/db')
const app=express()
const cors=require('cors') 
app.use(express.json())
app.use(cors())
// app.use('./',)
const router=require('./routes/employees-routes')
app.use('/api', router)
const PORT= process.env.PORT || 8000
app.listen(PORT)