const express = require('express');
const router = express.Router();
const userController = require ('../Controllers/userController');

//Define routes
router.post('/', userController.createUser);
router.post('/', userController.getUserById);
router.post('/', userController.updateUser);

module.exports = router;
