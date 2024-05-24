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
// app.route('/').get(async (req,res)=>{
//     console.log("Connected with backend")
//     // res.json({"name": "siam"})
//     try {
//         const result = await pool.query("SELECT * FROM users");
//         res.json(result.rows)
//     } catch (err) {
//         console.error(err.message)
//     }
// })
// .post((req,res) =>{

// });

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})