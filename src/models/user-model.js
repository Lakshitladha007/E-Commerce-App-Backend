const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
      unique: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
     password:{
        type:String,
        required: true
     },
     address:{
        type:String,
        required: true
     }, 
     phone:{
        type:Number, 
        required: true
     }, 
     role:{
        type:String,
        enum: ['user', 'admin'],
        required: true 
     }
}, { timestamps: true});

const User = new mongoose.model("User", userSchema);

module.exports= User;