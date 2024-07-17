const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

// Auth routes
router.post('/register', authService.register);
router.post('/login', authService.login);
// router.post('/refresh', authController.refresh);
// router.post('/logout', authController.logout);

module.exports = router;