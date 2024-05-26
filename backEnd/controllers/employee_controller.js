const { json } = require("body-parser");
const pool = require("../dbConnect");

const date = new Date();

const orderFood = async (req, res) => {
    const { opt_id, user_id } = req.body;
    console.log(req.body); 


    if (isNaN(user_id)) {
        return res.status(400).json({ "message": "Invalid user ID" });
    }

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; //set date

    try {
        console.log(user_id);   
        const order_exist = await pool.query("SELECT * FROM order_food WHERE employee_id = $1 AND date = $2", [user_id, currentDate]);

        if (order_exist.rows.length === 0) {
            const order_food = await pool.query("INSERT INTO order_food(employee_id, opt_id, date) VALUES($1, $2, $3)", [user_id, opt_id, currentDate]);
            return res.status(201).json({ "message": "Order Place Success" });
        } else {
            return res.status(401).json({ "message": "Order exists. Please delete your previous order." });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Internal Server Error" });
    }
};

const ViewOrderHistory = async (req,res) => {
    const employeeId = parseInt(req.params.id,10);
    try {
        const ViewOrderHistory = await pool.query("SELECT * FROM food_option INNER JOIN order_food ON  food_option.opt_id = order_food.opt_id WHERE order_food.employee_id = $1;", [employeeId]);
        res.json(ViewOrderHistory.rows);
    } catch (error) {
        
    }
}
module.exports={
    orderFood,
    ViewOrderHistory,
}
