const express = require('express');
const router = express.Router();
const {  get, update, destroy, getAll, signUp, signIn } = require("../../controllers/user-controller");


//create a user
router.post('/signup', signUp);
router.post('/signin', signIn);
//delete a user
router.delete('/users/:id', destroy);
//Update user
router.patch('/users/:id', update);
//get user by Id
router.get('/users/:id', get);
//get all users
router.get('/users', getAll);

module.exports=router;