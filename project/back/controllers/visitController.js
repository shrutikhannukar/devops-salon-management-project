const visitModel = require("../models/visitModel");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");


const visit1Controller= async (req,res)=>{
    try{
        const existinguser=await visitModel.findOne({email:req.body.email});
        console.log(req.body)
    
            // const salt=await bcrypt.genSalt(10);
            // const hashedPassword=await bcrypt.hash(req.body.password,salt);
            // req.body.password = hashedPassword;
            const user=new visitModel(req.body);
            await user.save();
            return res.status(200).send({
                message:'booking done successfully',
                success:true,
                user:user
              
            });
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:'error in booking api',
            success:false,
            error:error

        });
    
    }
}
const getAllAppointments= async(req, res) => {

    try {

        const user = await visitModel.find();
        console.log(user)
        res.send(user)
        
    } catch (error) {
        return res.status(400).json(error).send({
        success:false,
        message:'fail to get users',
        error:user
    })};
  
};


module.exports={visit1Controller,getAllAppointments};

