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
async function get_Categories(req,res){
    let data = await model.Categories.find({})
    let filter=await data.map(v=>Object.assign({},{type:v.type,color:v.color}));
    return res.json(filter);
}

//post req :: https://localhost:8080/api/transaction
async function create_Transaction(req,res){
    if(!req.body) return res.status(400).json("Data not provided!");
let{name,type,amount}=req.body;

const create= await new model.Transaction(
    {
        name,
        type,
        amount,
        date: new Date()
    }
);
create.save(function(err){
    if(!err) return res.json(create);
    return res.status(400).json({message:`Error while creating Transaction ${err}`});
})

}

//get req :: https://localhost:8080/api/transaction
async function get_Transaction(req,res){
    let data=await model.Transaction.find({});
    return res.json(data);
}

//del eq :: https://localhost:8080/api/transaction

async function del_Transaction(req,res){
    if(!req.body) res.status(400).json({message:"Req Body not found!"});
    await model.Transaction.deleteOne(req.body,function(err){
        if(!err) res.json("Record Deleted..!");
    }).clone().catch(function(err){
        res.json("Error while Deleting Transaction")
    });
}

module.exports={
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    del_Transaction
}