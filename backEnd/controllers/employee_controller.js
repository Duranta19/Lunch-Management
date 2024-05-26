const { json } = require("body-parser");
const pool = require("../dbConnect");

const date = new Date();

const orderFood = async (req, res) => {
    const { opt_id, user_id } = req.body;
    // console.log(opt_id, user_id); 


    if (isNaN(user_id)) {
        return res.status(203).json({ "message": "Invalid user ID" });
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
            res.status(210).send("Order Place Success");
        } else {
            res.status(200).send("Order exists. Please delete your previous order.");
        }
    } catch (error) {
        console.error(error);

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
const deleteOrder = async (req,res) =>{
    const order_id = req.params.orderId
    try {
        const deleteOrder = await pool.query('DELETE FROM order_food WHERE order_id = $1', [order_id]);
        res.status(401).send("Delete Successful");
    } catch (error) {
        console.log(error);
        res.status(201).send("Delete Successful");
    }
}
module.exports={
    orderFood,
    ViewOrderHistory,
    deleteOrder,
}
