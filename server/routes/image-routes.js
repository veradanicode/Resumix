const express =require('express');
const uploadMiddleware =require('../middlewares/upload-middleware');
const {ImageUpload} =require('../controllers/image-controllers');
const router =express.Router();

//upload router
router.post('/upload',
    uploadMiddleware.single('image'),
      ImageUpload)

module.exports=router;