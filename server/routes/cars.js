const express= require('express');
const routes=express.Router()
const {Cars,Validatecar}=require('../models/cars')
routes.get('/',async(req,res)=>{
    const cars=await Cars.find();
    res.send(cars)
})
routes.get('/:id',async (req,res)=>{
    const car=await Cars.findById(req.params.id);
    res.send(car)
})
routes.post('/',async(req,res)=>{
    const validatedinput=Validatecar(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const car=new Cars({
            name:req.body.name,
            model:req.body.model,
            dailyrentalrate:req.body.dailyrentalrate,
            ownername:req.body.ownername,
        })
        await car.save()
        res.send(car)
    }
})
routes.put('/:id',async (req,res)=>{
    const validatedinput=Validatecar(req.body);
    if(validatedinput.error){
        res.status(350).send(validatedinput.error.details[0].message)
    }
    else{
        const car=Cars.findByIdAndUpdate(req.params,id,
           { $set:{
                'name':req.body.name,
                'model':req.body.model,
                'dailyrentalrate':req.body.dailyrentalrate,
                'ownername':req.body.ownername
            }
        },{new:true})
        res.send(car)
    
    }
    })
    routes.delete('/:id',async(req,res)=>{
        const car= await Cars.findByIdAndDelete(req.params.id);
        res.send(car)
    })
    module.exports=routes