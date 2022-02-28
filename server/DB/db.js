
const mongoose=require('mongoose')
const string_connection =process.env.string_connection

mongoose.connect(string_connection,{
    useNewUrlParser:true,
    useUnifiedTopology :true
})
   .then( ()=>console.log('the connection is up '))
   .catch (err=>console.log(err))

module.exports=mongoose.connection;