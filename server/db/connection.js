const mongoose=require('mongoose');
const connection= mongoose.connect(process.env.URI)
.then(db=>{
    console.log("Db is connected")
    return db;
}).catch(err=>{
    console.log("Connection error")
    console.log(err);
})

module.exports=connection;