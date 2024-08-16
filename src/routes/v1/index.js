const express = require('express');
const router = express.Router();
const  authValidator = require("../../middlewares/authValidator");
const {  get, update, destroy, getAll, signUp, signIn } = require("../../controllers/user-controller");
const CategoryController = require('../../controllers/category-controller');
const authMiddleware = require('../../middlewares/authMiddleware');

// routes for User Model

// create a user
router.post('/signup', authValidator.signUpValidator, signUp);
router.post('/signin', authValidator.signInValidator, signIn);
//delete a user
router.delete('/users/:id', destroy);
//Update user
router.patch('/users/:id', update);
//get user by Id
router.get('/users/:id', get);
//get all users
router.get('/users', getAll);
router.get('/isAuthenticated', authMiddleware)


// routes for Category Model

// create a category
router.post('/categories', CategoryController.create)
//delete a category
router.delete('/categories/:id', CategoryController.destroy);
//Update user
router.patch('/categories/:id', CategoryController.update);
//get user by Id
router.get('/categories/:id', CategoryController.get);
//get all users
router.get('/categories', CategoryController.getAll);

module.exports=router;