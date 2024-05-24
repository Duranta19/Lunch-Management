const {Router} = require("express");
const { signIn, signUp } = require("../controllers/authController");
// import all controllers
// import SessionController from './app/controllers/SessionController';

const AuthRoutes = Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
// AuthRoutes.route('/')
//         .get()
//         .post()
AuthRoutes.route('/signin').post(signUp)
module.exports = AuthRoutes;
