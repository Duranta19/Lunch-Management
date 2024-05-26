const bodyParser = require("body-parser");
const express = require("express")
require('dotenv').config();
const cors = require('cors');
const pool = require("./dbConnect");
const AuthRoutes = require("./routers/authRouter");
const Admin_Routes = require("./routers/admin-Router");
const EmployeeRouters = require("./routers/employee-Router");
const session = require('express-session');
const path = require("path");
const app = express()
const port = process.env.PORT
console.log(port);
// console.log(process.env.SECRET_KEY);
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
  }));
  
app.use('/', AuthRoutes);
app.use('/admin', Admin_Routes);
app.use('/employee', EmployeeRouters);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})