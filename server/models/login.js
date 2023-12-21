const mongoose=require('mongoose')
const Joi=require('joi')
// const config=require('config')
// const jwt=require('jsonwebtoken')

const loginschema=new mongoose.Schema({
    
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:5,
        maxlength:200
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1020
    },
    
})
// userschema.methods.generateAuthToken=function(){
//     const token=jwt.sign({ _id:this._id,isAdmin:this.isAdmin},config.get('jwtprivatekey'))
//     return token
// }
const loginModel=mongoose.model('Login',loginschema)
function validateuser(user){
    const schema=Joi.object({
        // name:Joi.string().min(5).required(),
        email:Joi.string().min(5).required().email(),
        password:Joi.string().min(5).required(),
        
    })
    const validate=schema.validate(user)
    return validate
}
module.exports.Loginuser=loginModel;
module.exports.validatelogin=validateuser