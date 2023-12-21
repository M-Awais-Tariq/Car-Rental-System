const express= require('express');
const routes=express.Router()
const {Rentals,ValidateRental}=require('../models/rental')
const {Cars}=require('../models/cars')
const {Drivers}=require('../models/driver')
const {Passengers}=require('../models/passenger')
routes.get('/',async(req,res)=>{
    const rentals=await Rentals.find();
    res.send(rentals)
})
routes.get('/:id',async (req,res)=>{
    const rental=await Rentals.findById(req.params.id);
    res.send(rental)
})
routes.post('/',async(req,res)=>{
    // const validatedinput=ValidateRental(req.body);
    // if(validatedinput.error){
    //     res.status(300).send(validatedinput.error.details[0].message)
    // }
    // else{
        // const cars= await Cars.findById(req.body.carid)
        // if(!cars) return res.status(404).send("Invalid cars  id")
        // const driver=await Drivers.findById(req.body.driverid)
        // if(!driver) return res.status(404).send("Invalid driver  id")
         const passenger=await Passengers.findById(req.body.passengerid)
        if(!passenger) return res.status(404).send("Invalid passenger  id")
        const rental=new Rentals({
           passenger:{
            name:passenger.name,
            contactnumber:passenger.contactnumber
           },
           plocation:req.body.plocation,
           pdate:req.body.pdate,
           dDate:req.body.dDate,
           ptime:req.body.ptime,
           dtime:req.body.dtime,
           car:req.body.car
        //    cars:{
        //     name:cars.name,
        //     model:cars.model
        //    },
        //    driver:{
        //     name:driver.name,
        //     contactnumber:driver.contactnumber
        //    }

        })
        await rental.save()
        res.send(rental)
    // }
})
routes.put('/:id',async (req,res)=>{
    // const validatedinput=ValidateRental(req.body);
    // if(validatedinput.error){
    //     res.status(350).send(validatedinput.error.details[0].message)
    // }
    // else{
        const cars= await Cars.findById(req.body.carsid)
        if(!cars) return res.status(404).send("Invalid cars  id")
        const driver=await Drivers.findById(req.body.driverid)
        if(!driver) return res.status(404).send("Invalid driver  id")
        const passenger=await Passengers.findByID(req.body.passengerid)
        if(!passenger) return res.status(404).send("Invalid passenger  id")
       
        const rental= await Rentals.findByIdAndUpdate(req.params.id,
           { $set:{
            'cars.name':req.body.cars.name,
            'cars.model':req.body.cars.model,
            'driver.name':req.body.driver.name,
            'driver.contactnumber':req.body.driver.contactnumber,
            'passenger.name':req.body.passenger.name,
            'passenger.contactnumber':req.body.passenger.contactnumber       
        }
        },{new:true})
        res.send(rental)
    
    }
    // }
    )
    routes.delete('/:id',async(req,res)=>{
        const rental= await Rentals.findByIdAndDelete(req.params.id);
        res.send(rental)
    })
    module.exports=routes