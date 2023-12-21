const mongoose=require('mongoose')
const Joi=require('joi')
const rentalschema=mongoose.Schema({
    passenger:{
        type:new mongoose.Schema({
         name:{
            type:String,
            required:true
         },
         contactnumber:{
            type:String,
            required:true
         }
        }),
        required:true,
    },
    plocation:{
        type:String,
        required:true
    },
    pdate:{
        type:Date,
        required:true
    },
    dDate:{
        type:Date,
        required:true
    },
    ptime:{
        type:String,
        required:true
    },
    dtime:{
        type:String,
        required:true
    },
    car:{        
            type:String,
            required:true,
    },
  
})
const RentalModel=mongoose.model('Rentals',rentalschema)
function validaterental(validateobject){
    const schema=Joi.object({
        passengerid:Joi.objectid().required(),
        plocation:Joi.string.required(),
        pdate:Joi.date().required(),
        dDate:Joi.date().required(),
        ptime:Joi.time().required(),
        dtime:Joi.time().required(),
        car:Joi.string.required(),
        
    })
    const result=schema.validate(validateobject)
    return result;
}
module.exports.Rentals=RentalModel;
module.exports.ValidateRental=validaterental;