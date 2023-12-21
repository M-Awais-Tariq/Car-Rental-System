const express=require('express');
const router=express.Router();
const {Signupuser,validatesignup}=require('../models/signup');
const _=require('lodash')
const bcrypt=require('bcrypt')
// const auth=require('../middleware/auth')

// router.get('/me',auth,async(req ,res)=>{
//     const user =await Signupuser.findById(req.user._id).select('-password');
//     res.send(user)
// })

router.post('/',async(req,res)=>{
    const {error}=validatesignup(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let  user=await Signupuser.findOne({email:req.body.email})
    if(user) return res.status(400).send("user already existed")
    user=new Signupuser(_.pick(req.body,["name","email","password","isAdmin"]))
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)
    await user.save()
    // const token=user.generateAuthToken()
    // res.header('x-auth-token',token).send(_.pick(user,["_id","name","email","isAdmin"]))
})
module.exports=router