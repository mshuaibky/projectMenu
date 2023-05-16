const mongoose=require('mongoose')


const menuSchema=new mongoose.Schema({
    catagory:{
        type:String,
        required:true,
        trim:true
    },
    foodOne:{
        type:String,

    },
    foodTwo:{
        type:String,
        
    },
    foodThree:{
        type:String,
        
    },
    foodFour:{
        type:String,
        
    },
    image:{
        type:Array
    }
})

module.exports=mongoose.model('Menu',menuSchema)
