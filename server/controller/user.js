const User = require('../model/user/user')
const bcrypt = require('bcrypt');

exports.signUp = (req, res) => {

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
            User.findOne({ email }).then((email) => {
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
                        res.status(500).send({ msg: 'user already exists', err: err })
                    }
                    const newUser = new User({
                        name,
                        email,
                        password: hash
                    })
                    newUser.save().then((user) => {
                        res.status(202).json({ success: 'registration success' })
                    })
                });
            }
        })
    } catch (error) {

    }
}
//user login
exports.loginDetails = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        console.log(user, 'namma user');
        if (user) {
            let validUser = await bcrypt.compare(password, user.password)
            console.log(validUser, 'validUser');
            if (validUser) {
                let loggedIn = await User.findByIdAndUpdate({_id:user._id}, {
                    $set: {
                        isLoggedIn: true
                    }
                })
                console.log(loggedIn, 'logged in detatils');
                if (loggedIn) {
                    console.log(user._id,'id');
                    req.session.userId = user;
                    res.status(200).send({ msg: loggedIn })
                } else {
                    res.status(500).send({ msg: 'something went wrong' })
                }
            } else {
                res.status(401).send({ msg: 'password doesnot match' })
            }

        } else {
            res.status(500).send({ msg: 'no user found' })
        }
    } catch (error) {
        res.send({ msg: error })
    }
}
//getting  users
exports.getUser=async(req,res)=>{
    try {
       let user=await User.find({}) 
       console.log(user,'namm auser');
       if(user){
        res.status(200).send({data:user})
       }else{
        res.status(500).send({msg:'something went wrong'})
       }
    } catch (error) {
        
    }
}