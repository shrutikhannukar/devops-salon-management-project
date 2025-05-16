const express=require('express');
const { signupController , loginController,getAllUsers} = require('../controllers/authcontroller')
// const { controller } = require('../controllers/testcontroller');
const router= express.Router();

router.post('/signup' ,signupController)
// router.get('/user' ,currentUserController)
router.post('/login' ,loginController)
router.get("/getalluser", getAllUsers)

   

module.exports=router;