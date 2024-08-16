const express = require('express');
const router = express.Router();
const  authValidator = require("../../middlewares/authValidator");
const {  get, update, destroy, getAll, signUp, signIn } = require("../../controllers/user-controller");
const CategoryController = require('../../controllers/category-controller');
const ProductController = require('../../controllers/product-controller');
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
//Update category
router.patch('/categories/:id', CategoryController.update);
//get category by Id
router.get('/categories/:id', CategoryController.get);
//get all categories
router.get('/categories', CategoryController.getAll);

// routes for product model

// create a product
router.post('/products', ProductController.create)
//delete a product
router.delete('/products/:id', ProductController.destroy);
//Update a product
router.patch('/products/:id', ProductController.update);
//get product by Id
router.get('/products/:id', ProductController.get);
//get all products
router.get('/products', ProductController.getAll);

module.exports=router;