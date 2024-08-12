const { UserRepository } = require("../repository/index");

class UserService{
      constructor(){
        this.userRepository= new UserRepository();
      }

      async create(data){
        try {
            const user= await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong, inside service layer");
            throw error;
        }
      }
      async destroy(userId){
        try {
            const response= await this.userRepository.destroy(userId);
            if(!response.deletedCount){
                return false;
            }
            return true;
        } catch (error) {
           console.log("Something went wrong");
           throw error;
        }
      }
      async update(userId, update){
        try {
            const response= await this.userRepository.update(userId, update);
            return response;
        } catch (error) {
           console.log("Something went wrong");
           throw error;
        }
      }
      async find(userId){
        try {
            const user= await this.userRepository.find(userId);
            return user;
        } catch (error) {
           console.log("Something went wrong");
           throw error;
        }
      }
      async getAll(){
        try {
          const users = await this.userRepository.findAll();
          return users;
        } catch (error) {
          console.log("Something went wrong");
           throw error;
        }
      }
}

module.exports= UserService;