const express= require('express');
const routes=express.Router()
const {Drivers,Validatedriver}=require('../models/driver')
routes.get('/',async(req,res)=>{
    const drivers=await Drivers.find();
    res.send(drivers)
})
routes.get('/:id',async (req,res)=>{
    const driver=await Drivers.findById(req.params.id);
    res.send(driver)
})
routes.post('/',async(req,res)=>{
    const validatedinput=Validatedriver(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const driver=new Drivers({
            name:req.body.name,
            age:req.body.age,
            experience:req.body.experience,
            contactnumber:req.body.contactnumber,
            email:req.body.email
        })
        await driver.save()
        res.send(driver)
    }
})
routes.put('/:id',async (req,res)=>{
    const validatedinput=Validatedriver(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const driver= await Drivers.findByIdAndUpdate(req.params.id,
           { $set:{
               'name':req.body.name,
               'age':req.body.age,
               'experience':req.body.experience,
               'contactnumber':req.body.contactnumber,
                'email':req.body.email
            }
        },{new:true})
        res.send(driver)
    
    }
    })
    routes.delete('/:id',async(req,res)=>{
        const driver=await Drivers.findByIdAndDelete(req.params.id);
        res.send(driver)
    })
    module.exports=routes