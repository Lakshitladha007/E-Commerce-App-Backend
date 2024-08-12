const User= require("../models/user-model");

class UserRepository{
    async create(object){
        try {
            const user=await User.create(object);
            return user;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async destroy(userId){
        try {
            const response = await User.deleteOne({_id:userId});
            return response;
        } catch (error) {
            console.log("Something went wrong");
            throw error; 
        }
    }

    async update(userId, update){  // userId is to identify the unique user & update is an object that consists of fields that needs to be updated
        try {
            const response = await User.findOneAndUpdate( { _id : userId }, update, { new : true } );
            return response;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async find(userId){  // userId is to identify the unique user & update is an object that consists of fields that needs to be updated
        try {
            const response = await User.findById(userId);
            return response;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async findAll(){
        try {
            const users= await User.find();
            return users;
        } catch (error) {
            console.log("somethiong went wrong");
            throw error;
        }
    }
}

module.exports= UserRepository;