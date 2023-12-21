const express=require('express');
const app=express()
const cars=require('./routes/cars')
const drivers=require('./routes/drivers')
const passengers=require('./routes/passengers')
const rentals=require('./routes/rentals')
const signup=require("./routes/signup")
require('./startup/validation')()
require('./startup/conn')()  
    app.use(express.json())
    app.use('/api/cars',cars)
    app.use('/api/passengers',passengers)
    app.use('/api/drivers',drivers)
    app.use('/api/rentals',rentals)
    app.use('/api/signup',signup)
   
    // app.use('/api/user',user)

    
    
const  port=process.env.port||5000
app.listen(port,()=>console.log("app running on port",port))




// require('./startup/routes')(app)


// require('./startup/config')


// app.get('/',(req,res)=>{
//     res.send("hello world")
// })
// app.use('/api/cars',cars)