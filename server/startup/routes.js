const express=require('express');
//  const app=express();
const cars=require('../routes/cars')
const drivers=require('../routes/drivers')
const passengers=require('../routes/passengers')
const rentals=require('../routes/rentals')
const user=require('../routes/user')
module.exports=(app)=>{
    app.use(express.json())
    app.use('/api/cars',cars)
    app.use('/api/passengers',passengers)
    app.use('/api/drivers',drivers)
    app.use('/api/rentals',rentals)
    app.use('/api/user',user)
    
}