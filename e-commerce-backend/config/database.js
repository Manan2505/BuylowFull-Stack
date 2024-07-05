const mongoose=require('mongoose');
require('dotenv').config();

 dbConnect=()=>{
    try{
        mongoose.connect("mongodb+srv://buylow:buylow@cluster0.ekc7wew.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family:4
        }).then(console.log('db connection-successful'));
    }catch(error){
        console.log(error);
    }
}
module.exports=dbConnect;