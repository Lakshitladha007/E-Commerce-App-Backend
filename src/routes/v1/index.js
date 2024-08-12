const express = require('express');
const router = express.Router();
const { create, get, update, destroy, getAll } = require("../../controllers/user-controller");

// create a user
router.post('/users', create);

router.delete('/users/:id', destroy);
//Update user
router.patch('/users/:id', update);
//get user by Id
router.get('/users/:id', get);
// get all users
router.get('/users', getAll)

module.exports=router;