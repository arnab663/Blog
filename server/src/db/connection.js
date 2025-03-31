
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Connection to the database is done');
}).catch((err)=>{
    console.log(`Error while connecting to the database - ${err}`);
})