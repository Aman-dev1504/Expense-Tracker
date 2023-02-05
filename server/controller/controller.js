const model= require('../models/models');
//post req :: https://localhost:8080/api/categories
function create_Categories(req,res){
    const Create=new model.Categories({
        type:'Savings',
        color:"#1F3B%C"
    })
    Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories`})
    })
    // res.json("Get request from categories")
}
module.exports={
    create_Categories
}