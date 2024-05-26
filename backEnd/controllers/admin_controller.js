const pool = require("../dbConnect");

const date = new Date();
const addOption =  async (req,res) => {
    const {option_name, items, total_cal} = req.body;
    // console.log(req.body);
    const img_path = req.file ? req.file.path : null;
    const Img_Path = img_path.replace(/\\/g, "/");

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; //set date
    try {
        //insert into food_option table query
        const add_new_item = await pool.query("INSERT INTO food_option (opt_name, opt_items, total_cal, img_path, date) VALUES ($1, $2, $3, $4, $5)",[option_name, items, total_cal, img_path, currentDate]);
        res.status(201).send("Successfully added new food option")
    } 
    catch (error) {
        console.error(error);
    }
};
const updateOption = async (req,res) =>{
    const upId = req.params.upId;
    const {option_name, items, total_cal} = req.body;
    console.log(option_name, items, total_cal);
    const img_path = req.file ? req.file.path : '/uploads/istockphoto-1191080960-612x612.jpg';
    const Img_Path = img_path.replace(/\\/g, "/");
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; //set date
    try {
        const updateResponse = await pool.query(
            'UPDATE food_option SET opt_name = $1, opt_items = $2, total_cal = $3, img_path = $4, date = $5 WHERE opt_id = $6',
            [option_name, items, total_cal, Img_Path, currentDate, upId]
        );

        if (updateResponse.rowCount > 0) {
            res.status(205).send("Update Successful");
            console.log("Update Successful:", updateResponse);
        } else {
            res.status(404).send("Update Failed: Option not found");
            console.log("Update Failed: Option not found");
        }
    } catch (error) {
        console.error("Error updating option:", error);
        res.status(500).send("Internal Server Error");
    }
}
const getOption = async (req,res) => {
    try {
        const {option_name, items, total_cal} = req.body;
        // console.log(req.body);
        const img_path = req.file ? req.file.path : null;
    
    
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`; //set date
        //show all food option avaliable query
        const all_options = await pool.query("SELECT * FROM food_option WHERE date = $1", [currentDate]);
        res.json(all_options.rows)
    } catch (error) {
        
    }
}
const deleteOption = async(req,res) =>{
    const opt_id = parseInt(req.params.optId,10);
    console.log(opt_id);
    try {
        const deleteItem = await pool.query('DELETE FROM food_option WHERE opt_id = $1', [opt_id]);
        res.status(200).send("Delete Item Successfully.");
    } catch (error) {
        console.error(error);
    }
}
const ViewOrderHistoryAdmin = async (req,res) => {
    const employeeId = parseInt(req.params.id,10);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; //set date
    try {
        const ViewOrderHistory = await pool.query("SELECT food_option.*,order_food.*,users.user_name AS e_name FROM food_option RIGHT JOIN order_food ON food_option.opt_id = order_food.opt_id JOIN users ON users.id = order_food.employee_id WHERE order_food.date = $1;", [currentDate]);
        res.json(ViewOrderHistory.rows);
    } catch (error) {
        
    }
}
module.exports = {
    addOption,
    getOption,
    deleteOption,
    ViewOrderHistoryAdmin,
    updateOption,
}