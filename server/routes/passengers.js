const express= require('express');
const routes=express.Router()
const {Passengers,Validatepassenger}=require('../models/passenger')
routes.get('/',async(req,res)=>{
    const passengers=await Passengers.find();
    res.send(passengers)
})
routes.get('/:id',async (req,res)=>{
    const passenger=await Passengers.findById(req.params.id);
    res.send(passenger)
})
routes.post('/',async(req,res)=>{
    const validatedinput=Validatepassenger(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const passenger=new Passengers({
            'name':req.body.name,
            'age':req.body.age,
            'contactnumber':req.body.contactnumber,
            'email':req.body.email
        })
        await passenger.save()
        res.send(passenger)
    }
})
routes.put('/:id',async (req,res)=>{
    const validatedinput=Validatepassenger(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const passenger=await Passengers.findByIdAndUpdate(req.params.id,
           { $set:{
                'name':req.body.name,
                'age':req.body.age,
                'contactnumber':req.body.contactnumber,
                'email':req.body.email
            }
        },{new:true})
        res.send(passenger)
    
    }
    })
    routes.delete('/:id',async(req,res)=>{
        const passenger= await Passengers.findByIdAndDelete(req.params.id);
        res.send(passenger)
    })
    module.exports=routes