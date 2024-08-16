const { ProductRepository }= require('../repository/index');

class ProductService{
    constructor(){
        this.productRepository = new ProductRepository();
    }

    async create(data) {
        try {
          const product = await this.productRepository.create(data);
          return product;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async destroy(productId) {
        try {
          const response = await this.productRepository.destroy(productId);
          if (!response.deletedCount) {
            return false;
          }
          return true;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async update(productId, update) {
        try {
          const response = await this.productRepository.update(productId, update);
          return response;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async find(productId) {
        try {
          const product = await this.productRepository.findById( productId );
          return product;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async getAll() {
        try {
          const products = await this.productRepository.findAll();
          return products;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
}

module.exports= ProductService;