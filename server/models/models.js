const mongoose=require('mongoose')
const Schema= mongoose.Schema

//categories module
const categories_module=new Schema({
    type:{
        type:String,
        default:"Investment"
    },
    color:{
        type:String,
        default:"FCBE44"
    }
})

const transaction_module=new Schema({
    name:{
        type:String,
        default:"Anonymous"
    },
    type:{
        type:String,
        default:"Investment"
    },
    amount:{
        type:Number,
    },
    date:{
        type:date,
        default:date.now
    }
})
const Categories= mongoose.model('categories',categories_module)
const Transaction=mongoose.model('transaction',transaction_module)

exports.default=Transaction;
module.exports={
    Categories,
    Transaction
}