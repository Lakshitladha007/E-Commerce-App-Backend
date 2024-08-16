const { CategoryRepository }= require('../repository/index');

class CategoryService{
    constructor(){
        this.categoryRepository = new CategoryRepository();
    }

    async create(data) {
        try {
          const category = await this.categoryRepository.create(data);
          return category;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async destroy(categoryId) {
        try {
          const response = await this.categoryRepository.destroy(categoryId);
          if (!response.deletedCount) {
            return false;
          }
          return true;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async update(categoryId, update) {
        try {
          const response = await this.categoryRepository.update(categoryId, update);
          return response;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async find(categoryId) {
        try {
          const category = await this.categoryRepository.findById( categoryId );
          return category;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
    
      async getAll() {
        try {
          const categories = await this.categoryRepository.findAll();
          return categories;
        } catch (error) {
          console.log("Something went wrong inside service layer", error);
          throw error;
        }
      }
}

module.exports= CategoryService;