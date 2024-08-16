const Category= require('../models/category-model');

class CategoryRepository{
    async create(object){
        try {
           const category= await Category.create(object);
           return category;
        } catch (error) {
            console.log("Something went wrong, error is:", error);
            throw error;
        }
    }

    async destroy(categoryId){
        try {
            const response= await Category.deleteOne({_id:categoryId});
            return response;
        } catch (error) {
            console.log("Something went wrong, error is:", error);
            throw error; 
        }
    }

    async update( categoryId, update){  // categoryId is to identify the unique user & update is an object that consists of fields that needs to be updated
        try {
            const data= await Category.findOneAndUpdate({ _id : categoryId }, update, { new : true });
            return data;
        }catch(error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async findById(categoryId){  // categoryId is to identify the unique user & update is an object that consists of fields that needs to be updated
        try {
            const category= await Category.findById(categoryId);
            return category;
        } catch (error) {
            console.log("Something went wrong", error);
            throw error;
        }
    }

    async findAll(){
        try {
            const categories= await Category.find();
            return categories;
        } catch (error) {
            console.log("somethiong went wrong", error);
            throw error;
        }
    }

}

module.exports= CategoryRepository;