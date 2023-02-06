const model= require('../models/models');
//post req :: https://localhost:8080/api/categories
async function create_Categories(req,res){
    const Create=new model.Categories({
        type:'Investment',
        color:"#HY678"
    })
    await Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories`})
    })
    // res.json("Get request from categories")
}

//Get req :: https://localhost:8080/api/categories
async function get_categories(req,res){
    let data = await model.Categories.find({})
    return res.json(data);
}
module.exports={
    create_Categories,
    get_categories
}