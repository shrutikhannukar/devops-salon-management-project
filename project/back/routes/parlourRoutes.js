const express=require('express');
const { parlour1Controller, getAllparlours } = require('../controllers/parlourController');


const router= express.Router();

router.post('/register',parlour1Controller)
router.get('/getallparlours',getAllparlours)


module.exports=router;