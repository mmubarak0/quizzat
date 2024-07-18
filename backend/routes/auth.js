const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');
const { newUserValidation, userValidation } = require('../middlewares/validation');

// Auth routes
router.post('/register', newUserValidation, authService.register);
router.post('/login', userValidation, authService.login);
// router.post('/refresh', authController.refresh);
// router.post('/logout', authController.logout);

module.exports = router;
