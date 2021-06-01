const router = require('express').Router();
const FileController =require('../controllers/FileController')
const FileCtrl = new FileController();

router.get('/download/:post', FileCtrl.search)

router.get('/download/:post/:id', FileCtrl.download)

module.exports = router;