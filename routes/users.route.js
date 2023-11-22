const express=require('express');
const usersController = require('./Controller/users.controller');
const router = express.Router();

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/users', usersController.getUsers);

module.exports = router;
