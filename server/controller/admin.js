const Admin=require('../model/admin/admin')
const Menu=require('../model/admin/menu')
const User=require('../model/user/user')
const cloudinary=require('../util/cloudinary')
const bcrypt = require('bcrypt');

//signUp
exports.adminSignUp=async(req,res)=>{
    console.log(req.body,'namma body');
    try {
        const { name, email, password } = req.body
        const checkName = new Promise((resolve, reject) => {
            if (!name || name?.length < 4) {
                reject(new Error('please enter a valid name'))
            } else {
                resolve()
            }
        })

        const checkEmail = new Promise((resolve, reject) => {
            Admin.findOne({ email }).then((email) => {
                if (email) {
                    res.status(401).json({ msg: 'user already exists' })
                    // reject(new Error('Email is already exists'))
                } else {
                    resolve()
                }
            })

        })
        Promise.all([checkName, checkEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10, function (err, hash) {
                    if (err) {
                        res.status(500).send({ msg: 'admin already exists', err: err })
                    }
                    const admin = new Admin({
                        name,
                        email,
                        password: hash
                    })
                    admin.save().then((user) => {
                        res.status(202).json({ success: 'registration success' })
                    })
                });
            }
        })
    } catch (error) {

    }
}
//admin login

exports.AdminLogin=async(req,res)=>{
    try {
        console.log(req.body);
        const {email,password}=req.body
        let admin= await Admin.findOne({email})
        console.log(admin,'admin');
        if(admin){
            let validAdmin=await bcrypt.compare(password,admin.password)
            if(validAdmin){
                console.log(admin._id,'admin id');
               

                res.status(200).send({admin:admin})
            }else{
                res.status(500).send({msg:'something went wrong'})
            }
        }
        else if(!admin){
            let user=await User.findOne({email})
           
            if(user){
               if(user.isAdmin){
                console.log(user._id,'userId');
               
                res.status(200).send({msg:user})
               } else{
                res.status(500).send({msg:'something went wrong'})
               }
            }else{
                res.status(500).send({msg:'enter valid email and password'})
            }
        }
    } catch (error) {
        
    }
}

exports.addCatagory=async(req,res)=>{
  try {
    console.log(req.body,'namma body');
    const {catagory,foodOne,foodTwo,foodThree,image}=req.body
    const result=await cloudinary.uploader.upload(image,{
        upload_preset:'restaurant',
    })
  
    let menu=new Menu({
        catagory,
        foodOne,
        foodTwo,
        foodThree,
        image:result
    })
    menu.save().then(()=>{
        console.log('menu saved');
        res.status(200).send({msg:'added successfully'})
    })
  } catch (error) {
    res.send(error)
  }
}
//get all catagory
exports.getAllCatagory=async(req,res)=>{
    try {
       let menu= await  Menu.find({}) 
      console.log(menu,'namma menu');
       if(menu){
        res.status(200).send({data:menu})
       }else{
        res.status(500).send({msg:'something went wrong'})
       }
    } catch (error) {
        res.send(error)
    }
}


exports.getUsers=async(req,res)=>{
    try {
        let users=await User.find({})
        console.log(users,'namm auser');
        if(users){
            res.status(200).send({user:users})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    } catch (error) {
        res.send(error)
    }
}

exports.makeAdmin=async(req,res)=>{
    try {
     console.log(req.params.id,'namma id');
     const {id}=req.params
     let details=await User.findByIdAndUpdate(id,{isAdmin:true})
     if(details){
         let user=await User.find({})
         if(user){
             res.status(200).send({user:user})
         }
     }
    } catch (error) {
     res.send(error)
    }
 }