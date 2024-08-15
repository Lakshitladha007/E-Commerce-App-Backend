const express = require('express');
const router = express.Router();
const  authValidator = require("../../middlewares/authValidator");
const {  get, update, destroy, getAll, signUp, signIn } = require("../../controllers/user-controller");
const authMiddleware = require('../../middlewares/authMiddleware');

//create a user
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

module.exports=router;