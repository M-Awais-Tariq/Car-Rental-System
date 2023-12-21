const mongoose=require('mongoose')
const Joi=require('joi')
const carschema=mongoose.Schema({
    name:{
    type:String,
    required:true,
    min:3,
    max:255
    },
    model:{
        type:String,
        required:true,
        min:3,
        max:255
    
    },
    dailyrentalrate:{
    type:Number,
    required:true,
    },
    ownername:{
        type:String,
        required:true,
        min:3,
        max:255    
    }
})
const CarModel=mongoose.model('Cars',carschema)
function validatecar(validationobj){
    const schema=Joi.object({
        name:Joi.string().required().min(3),
        model:Joi.string().required().min(3),
        dailyrentalrate:Joi.number().required(),
        ownername:Joi.string().required()
    })
    const result=schema.validate(validationobj)
    return result;
}

module.exports.Cars=CarModel;
module.exports.Validatecar=validatecar
