const {Router} = require("express");
const { addOption, getOption } = require("../controllers/admin_controller");
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
const Admin_Routes = Router();

Admin_Routes.route('/add-option').post(upload.single('image'),addOption);
Admin_Routes.route('/get-option').get(getOption);

module.exports = Admin_Routes;