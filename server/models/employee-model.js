const mongoose=require('mongoose')
const schema=mongoose.Schema;
const Employee=new schema({
    firstName:String,
    lastName:{ type:String, require},
    email:String,
    age:Number
},
{timestamps:true}
)
module.exports=mongoose.model('Employee',Employee)

