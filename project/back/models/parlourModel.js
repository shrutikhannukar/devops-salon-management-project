const mongoose = require("mongoose")
const parlourSchema=new mongoose.Schema({
    parlourname:{
        type:String,
        required:[true,"parlour_name is required"],
    },
    number:{
        type:Number,
        required:[true,"Phone is required"],
    },
    city:{
        type:String,
        required:[true,"City is required"],
        enum:["Belgaum","pune","goa"]
    },

    state:{
        type:String,
        required:[true,"state is required"],
    },

    pincode:{
        type:Number,
        required:[true,"pincode is required"],
    },

    country:{
        type:String,
        required:[true,"country is required"],
    },

    address:{
        type:String,
        required:[true,"Address is required"],
    },

    fname:{
        type:String,
        required:[true,"fname is required"],
    },

    lname:{
        type:String,
        required:[true,"lname is required"],
    },

     email:{
        type:String,
        required:[true,"Email is required"],
    },

     password:{
        type:String,
        required:[true,"Password is required"],
    },
    images:{
            type:String,
            required:[true,"images is required"],
        },

   weblink:{
        type:String,
        required:[true,"Website Link is required"],
    },
 
},
    {
        timestamps:true
    })

    module.exports=mongoose.model("parlour_details",parlourSchema)