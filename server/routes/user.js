const express = require('express');

const { isUser } = require('../middleware/isUser');
const { registerUser, loginUser, getUserDetails, searchByAdhar } = require('../controller/user');
const router = express.Router();
// const multer = require('multer');

// const storage = multer.memoryStorage()

router.post('/signUp',registerUser)

router.post('/login', loginUser);
router.post('/searchbyadhar', searchByAdhar);
router.get('/me',isUser,getUserDetails);

module.exports = router
