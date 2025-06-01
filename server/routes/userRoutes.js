const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { googleSignIn } = require('../controllers/googleAuth');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/verify-otp', userController.verifyOtp);
router.post('/resend-otp', userController.resendOtp);
router.post('/add', userController.addUser); 
router.put('/edit/:id', userController.updateUser);  
router.delete('/delete/:id', userController.deleteUser);

router.post('/auth/google', googleSignIn);

module.exports = router;
