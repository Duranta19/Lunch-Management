const {Router} = require("express");
const { addOption, getOption, deleteOption, ViewOrderHistoryAdmin, updateOption } = require("../controllers/admin_controller");
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

Admin_Routes.route('/add-option').post(upload.single('image'),addOption); //add new food option
Admin_Routes.route('/update-option/:upId').put(upload.single('image'),updateOption); //update new food option
Admin_Routes.route('/get-option').get(getOption); //view all foodoption avaliable today
Admin_Routes.route('/delete-item/:optId').delete(deleteOption);
Admin_Routes.route('/order-history').get(ViewOrderHistoryAdmin);
module.exports = Admin_Routes;