const mongoose = require("mongoose");
const Joi=require('joi')
const driverschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    unique:true,
    required:true,
    maxlength:200
  },
});
const DriverModel = mongoose.model("Drivers", driverschema);
function validatedriver(validationobj){
    const schema=Joi.object({
        name:Joi.string().required().min(3),
        age:Joi.number().required(),
        experience:Joi.number().required(),
        contactnumber:Joi.string().required(),
        email:Joi.string().required().email()
    })
    const result=schema.validate(validationobj)
    return result;
}

module.exports.Drivers=DriverModel;
module.exports.Validatedriver=validatedriver
