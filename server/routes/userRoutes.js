const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/add', userController.addUser); 
router.put('/edit/:id', userController.updateUser);  
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
