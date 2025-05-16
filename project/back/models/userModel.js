const mongoose = require("mongoose")
const userSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    role:{
        type:String,
        required:[true,"Role is required"],
        enum:["Admin","Parlour owner","User"]
    },
 
},
    {
        timestamps:true
    })

    module.exports=mongoose.model("user",userSchema)