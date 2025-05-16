const express=require('express');
const { visit1Controller, getAllAppointments} = require('../controllers/visitController')

const router= express.Router();

router.post('/visit' ,visit1Controller)
router.get('/getallappointments' ,getAllAppointments)

module.exports=router;