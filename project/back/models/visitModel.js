const mongoose = require("mongoose")
const visitersSchema=new mongoose.Schema({
  
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
    },
   phone:{
        type:Number,
        required:[true,"Phone is required"],
    },

    category:{
        type:String,
        required:[true,"category is required"],
        enum:["Select category","Beauty & spa","Body massage","Shaving & Facial","Hair Color"]
    },

    date:{
        type:String,
        required:[true,"date is required"],
    },

    message:{
        type:String,
        required:[true,"message is required"],
    }
},
    {
        timestamps:true
    })

    module.exports=mongoose.model("visiters",visitersSchema)