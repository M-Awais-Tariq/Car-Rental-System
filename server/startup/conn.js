const mongoose=require('mongoose');
module.exports=function(){
    mongoose.connect('mongodb://127.0.0.1:27017/RentHub',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('connected to db successfully'))
    .catch((err)=>console.log(err.message,"Doesn't connected to db"))  

}