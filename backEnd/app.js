const bodyParser = require("body-parser");
const express = require("express")
require('dotenv').config();
const cors = require('cors');
const pool = require("./dbConnect");
const AuthRoutes = require("./routers/authRouter");
const app = express()
const port = process.env.PORT
console.log(port)

app.use(bodyParser.json())
app.use(cors())

app.use('/', AuthRoutes)


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})