const express = require('express');

const { registerHospital, loginHospital } = require('../controller/hospital');
const { isHospital } = require('../middleware/isHospital');
const router = express.Router();
// const multer = require('multer');

// const storage = multer.memoryStorage()

router.post('/signUp',registerHospital)

router.post('/login', loginHospital);

// router.get('/me',isHospital,getUserDetails);

module.exports = router
