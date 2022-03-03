require('dotenv').config();
const express=require('express')
const connection =require('./DB/db')
const app=express()
const cors=require('cors') 
app.use(express.json())
app.use(cors())
const router=require('./routes/employees-routes')

const PORT= process.env.PORT || 8000
app.listen(PORT)
app.get('/',(req,res)=>res.send("hello world"))
const userRouter=require('./routes/user-rotes')
app.use('/users', userRouter)


const passport=require('passport') 
require('./config/passport')(passport)
app.use(passport.initialize())//Initialize the passport function on the server
app.use('/employee', passport.authenticate('jwt',{session:false}),router)


if (process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.json(__dirname,'client/build','db.js')))
}

