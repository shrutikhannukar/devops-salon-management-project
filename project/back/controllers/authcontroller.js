const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");


const signupController= async (req,res)=>{
    try{
        const existinguser=await userModel.findOne({email:req.body.email});
        if(existinguser){
            return res.status(400).send({
                message:'user already exists',
                success:false,
                error:existinguser
            });}
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(req.body.password,salt);
            req.body.password = hashedPassword;
            const user=new userModel(req.body);
            await user.save();
            return res.status(200).send({
                message:'user registered successfully',
                success:true,
                user:user
              
            });
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:'error in signup api',
            success:false,
            error:error

        });
    
    }
}

const loginController= async(req, res)=>{
    // const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(404).send({
                message:'user not found',
                success:false,
                error:user
            });
        }
    //check role
console.log("1")

        const isMatch=await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            console.log("2")
            return res.status(400).send({
                message:'password is incorrect',
                success:false,
                error:isMatch
            });
        }
        console.log("3")
        const token=jwt.sign({userId:user._id},"SECRETKEY",{
            expiresIn:'1d'
        });
        console.log("4")
      return  res.status(200).send({
        success:true,message:"login successful",token,user});
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:'error in login api',
            success:false,
            error:error
        });
    }
}

// const currentUserController = () =>{
//     return async(req,res)=>{
//         try{
//             const user=await userModel.findById(req.body.userId);
//             return res.status(200).send({
//                 message:'user fetched successfully',
//                 success:true,
//                 user:user
//             });
//         }catch(error){
//             console.log(error);
//             return res.status(500).send({
//                 success:false,
//                 message:'unable to get user',
//                 error:error
//             });
//         }
//     }

// }

const currentUserController = async (req, res) => {
    try {
      const user = await userModel.findOne({ _id: req.body.userId });
      return res.status(200).send({
        success: true,
        message: "User Fetched Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "unable to get current user",
        error,
      });
    }
  };
// const loginController= async(req, res)=>{
//     // const {email,password}=req.body;
//     try{
//         const user=await userModel.findOne({email:req.body.email});
//         if(!user){
//             return res.status(404).send({
//                 message:'user not found',
//                 success:false,
//                 error:user
//             });
//         }
//     //check role
//     // if (user.role !== req.body.role) {
//     //     return res.status(500).send({
//     //       success: false,
//     //       message: "role dosent match",
//     //     });
//     //   }

//         const isMatch=await bcrypt.compare(req.body.password,user.password);
//         if(!isMatch){
//             return res.status(400).send({
//                 message:'password is incorrect',
//                 success:false,
//                 error:isMatch
//             });
//         }
//         const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
//             expiresIn:'1d'
//         });
//       return  res.status(200).send({
//         success:true,message:"login successful",token,user});
//     }catch(error){
//         console.log(error);
//         res.status(500).send({
//             message:'error in login api',
//             success:false,
//             error:error
//         });
//     }
// }
const getAllUsers= async(req, res) => {

    try {

        const user = await userModel.find();
        console.log(user)
        res.send(user)
        
    } catch (error) {
        return res.status(400).json(error).send({
        success:false,
        message:'fail to get users',
        error:user
    })};
  
};
module.exports={signupController, loginController,currentUserController,getAllUsers};