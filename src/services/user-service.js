const { UserRepository } = require("../repository/index");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/server-config')

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const res= await this.findByEmail(data.email);
      const user = await this.userRepository.create(data);
      const response={  // we don't want to send hashed password to frontend
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        address: user.address
      }
      return response;
    } catch (error) {
      console.log("Something went wrong, inside service layer");
      console.log(" error is:", error);
      throw error;
    }
  }

  async destroy(userId) {
    try {
      const response = await this.userRepository.destroy(userId);
      if (!response.deletedCount) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  }

  async update(userId, update) {
    try {
      const response = await this.userRepository.update(userId, update);
      return response;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  }

  async find(userId) {
    try {
      const user = await this.userRepository.findByID(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  }

  async getAll() {
    try {
      const users = await this.userRepository.findAll();
      return users;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      const user = await this.userRepository.findByEmail(email);
      return user;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  }

  comparePassword(plain, encrypted) {
    return bcrypt.compareSync(plain, encrypted);
  }

  async signIn(data) {
    try {
      const token = jwt.sign({
        email: data.email,
        password: data.password
      }, 
      SECRET_KEY,{
          expiresIn: '1h'
      });
      return token;
    } catch (error) {
      console.log("Something went wrong");
    }
  }
}

module.exports = UserService;