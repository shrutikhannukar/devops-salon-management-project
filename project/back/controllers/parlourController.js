const parlourModel = require("../models/parlourModel");

const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const parlour1Controller=async(req,res)=>{
    try{
        const existinguser=await parlourModel.findOne({email:req.body.email});
        if(existinguser){
            return res.status(400).send({
                message:'user already exists',
                success:false,
                error:existinguser
            });}
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(req.body.password,salt);
            req.body.password = hashedPassword;
            const user=new parlourModel(req.body);
            await user.save();
            return res.status(200).send({
                message:'user registered successfully',
                success:true,
                user:user
              
            });

        // const user=await User.create({name,email});
        // const token=await user.generateAuthToken();
        // res.status(201).send({user,token});
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:'error in parlour api',
            success:false,
            error:error

        });
    
    }
}
const getAllparlours= async(req, res) => {

    try {

        const parlour = await parlourModel.find();
        console.log(parlour)
        res.send(parlour)
        
    } catch (error) {
        return res.status(400).json(error).send({
        success:false,
        message:'fail to get parlours',
        error:parlour
    })};
  
};


module.exports={parlour1Controller,getAllparlours};