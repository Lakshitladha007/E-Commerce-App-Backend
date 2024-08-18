const express = require('express');
const router = express.Router();
const  authValidator = require("../../middlewares/authValidator");
const {  get, update, destroy, getAll, signUp, signIn } = require("../../controllers/user-controller");
const CategoryController = require('../../controllers/category-controller');
const ProductController = require('../../controllers/product-controller');
const authMiddleware = require('../../middlewares/authenticationMiddleware');
const { isAuthorizedAdmin, isAuthorizedUser } = require('../../middlewares/authorization');

// routes for User Model

// create a user
router.post('/signup', authValidator.signUpValidator, signUp);
router.post('/signin', authValidator.signInValidator, signIn);
//delete a user
router.delete('/users/:id', authMiddleware, isAuthorizedUser, destroy);
//Update user
router.patch('/users/:id', authMiddleware, isAuthorizedUser, update);
//get user by Id
router.get('/users/:id', authMiddleware, isAuthorizedUser,get);
//get all users
router.get('/users',authMiddleware, isAuthorizedUser, getAll);
router.get('/isAuthenticated', authMiddleware, isAuthorizedUser, authMiddleware)


// routes for Category Model

// create a category
router.post('/categories',authMiddleware, isAuthorizedAdmin, CategoryController.create)
//delete a category
router.delete('/categories/:id', authMiddleware, isAuthorizedAdmin, CategoryController.destroy);
//Update category
router.patch('/categories/:id', authMiddleware, isAuthorizedAdmin, CategoryController.update);
//get category by Id
router.get('/categories/:id', authMiddleware, isAuthorizedAdmin, CategoryController.get);
//get all categories
router.get('/categories', authMiddleware, isAuthorizedAdmin, CategoryController.getAll);

// routes for product model

// create a product
router.post('/products', authMiddleware, isAuthorizedAdmin, ProductController.create)
//delete a product
router.delete('/products/:id', authMiddleware, isAuthorizedAdmin, ProductController.destroy);
//Update a product
router.patch('/products/:id', authMiddleware, isAuthorizedAdmin, ProductController.update);
//get product by Id
router.get('/products/:id', authMiddleware, isAuthorizedAdmin, ProductController.get);
//get all products
router.get('/products', authMiddleware, isAuthorizedAdmin, ProductController.getAll);

module.exports=router;