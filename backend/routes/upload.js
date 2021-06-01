const router = require('express').Router();
const multer = require('multer')
const path = require('path');

const FileController = require('../controllers/FileController');
const FileCtrl = new FileController();

let StoragePath = path.join(__dirname, '../', 'storage');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, StoragePath)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage })

router.post('/uploads', upload.array('files'),  FileCtrl.create)


    

module.exports = router;