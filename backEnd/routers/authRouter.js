const {Router} = require("express");
const { signIn, signUp } = require("../controllers/authController");
// import all controllers
// import SessionController from './app/controllers/SessionController';

const AuthRoutes = Router();

AuthRoutes.route('/signup').post(signUp)
AuthRoutes.route('/signin').post(signIn)
module.exports = AuthRoutes;
