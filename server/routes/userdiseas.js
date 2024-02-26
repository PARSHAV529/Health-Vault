const express = require('express');
const { setUserDisease } = require('../controller/userdisease');
const router = express.Router();
// const multer = require('multer');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
// const storage = multer.memoryStorage()
router.post('/setuserdisease',upload.single("medicalReport"),setUserDisease)
module.exports = router