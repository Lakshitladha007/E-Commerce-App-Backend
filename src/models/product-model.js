const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
      unique: true
    }, 
    description:{
        type: String,
        required: true,
        maxlength: [150, 'Maximum length of description can be 150 characters']
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        default:50,
        required:true
    }
}, { timestamps: true});

const Product = new mongoose.model("Product", productSchema);

module.exports= Product;