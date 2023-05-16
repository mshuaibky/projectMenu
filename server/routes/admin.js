const express=require('express')
const router=express.Router()
const {adminSignUp,
    AdminLogin,
    addCatagory,
    getAllCatagory,
    getUsers,
    makeAdmin
} =require('../controller/admin')

router.post('/sign-up',adminSignUp)
router.post('/login',AdminLogin)
router.post('/add-catagory',addCatagory)


router.get('/get-catagory',getAllCatagory)
router.get('/get-users',getUsers)
router.get('/make-admin:id',makeAdmin)
module.exports=router