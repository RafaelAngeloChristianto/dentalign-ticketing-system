const express = require('express');
const { googleSignIn } = require('../controllers/googleAuth');

const router = express.Router();

router.post('/google', googleSignIn);  // this matches the frontend POST to /api/auth/google

module.exports = router;
