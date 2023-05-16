const express=require('express')
const router=express.Router()
const {signUp,
    loginDetails,
    getUser
} =require('../controller/user')

router.post('/sign-up',signUp)
router.post('/user-login',loginDetails)
router.get('/get-user',getUser)

module.exports=router