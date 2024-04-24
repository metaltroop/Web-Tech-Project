const mongoose=require('mongoose');
const DBHOST=process.env.DBHOST;

mongoose.connect(DBHOST).then(()=>{
    console.log(`mongo connected Successfully`);
}).catch((err)=>{
    console.log(`not connected to mongodb`);
})