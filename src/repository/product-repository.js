const Product= require('../models/product-model');

class ProductRepository{
    async create(object){
        try {
           const product= await Product.create(object);
           return product;
        } catch (error) {
            console.log("Something went wrong, error is:", error);
            throw error;
        }
    }

    async destroy(productId){
        try {
            const response= await Product.deleteOne({ _id : productId });
            return response;
        } catch (error) {
            console.log("Something went wrong, error is:", error);
            throw error; 
        }
    }

    async update( productId, update){  // categoryId is to identify the unique category & update is an object that consists of fields that needs to be updated
        try {
            const product= await Product.findOneAndUpdate({ _id : productId }, update, { new : true });
            return product;
        }catch(error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async findById(productId){  // categoryId is to identify the unique category & update is an object that consists of fields that needs to be updated
        try {
            const product= await Product.findById(productId);
            return product;
        } catch (error) {
            console.log("Something went wrong", error);
            throw error;
        }
    }

    async findAll(){
        try {
            const products= await Product.find();
            return products;
        } catch (error) {
            console.log("Something went wrong", error);
            throw error;
        }
    }

}

module.exports= ProductRepository;