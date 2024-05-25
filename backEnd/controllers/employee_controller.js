const { json } = require("body-parser");
const pool = require("../dbConnect");

const date = new Date();
const orderFood = async (req,res) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; //set date
    try {
        opt_Id = parseInt(req.params.optId, 10)
        user_id = req.session.user_id;

        const order_exist = await pool.query("SELECT * FROM order_food WHERE employee_id = $1 AND date = $2", [2, currentDate]);

        if(order_exist.rows.length === 0){
            const order_food = await pool.query("INSERT INTO order_food(employee_id, opt_id, date) VALUES($1,$2,$3)", [2, opt_Id,currentDate]);
            res.json({"message": "Order Place Success"})
        }
        else{
            res.json({"message": "Order exist. Please delete your previous order."});
        }
        res.send("Success")
    } catch (error) {
        console.error(error)
    }
};
const ViewOrderHistory = async (req,res) => {
    try {
        const ViewOrderHistory = await pool.query("SELECT * FROM food_option INNER JOIN order_food ON  food_option.opt_id = order_food.opt_id WHERE order_food.employee_id = $1;", [2]);
        res.json(ViewOrderHistory.rows);
    } catch (error) {
        
    }
}
module.exports={
    orderFood,
    ViewOrderHistory,
}
