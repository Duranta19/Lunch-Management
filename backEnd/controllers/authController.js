const pool = require("../dbConnect");
const bcrypt = require('bcrypt');
// new users signup
const signUp = async(req,res)=>{
    const {user_name, password, conf_pass, category} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user_result = await pool.query("SELECT * FROM users where user_name = $1", [user_name]);
        console.log(user_result.rows.length);
        if(user_result.rows.length === 0 && password === conf_pass){
            const reg_new_user = await pool.query("INSERT INTO users (user_name, password, category) VALUES ($1, $2, $3)", [user_name,hashedPassword,category]);
            res.status(201).send('User created successfully.');
        }
        res.json(reg_new_user.rows[0].id);
    } catch (error) {
        console.log(error);
    }
    
};

// user signin

module.exports ={
    signUp,
}