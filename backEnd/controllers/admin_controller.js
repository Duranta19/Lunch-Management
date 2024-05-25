const pool = require("../dbConnect");

const date = new Date();
const addOption =  async (req,res) => {
    const {option_name, items, total_cal} = req.body;
    const img_path = req.file.path;


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
const getOption = async (req,res) => {
    try {
        //show all food option avaliable query
        const all_options = await pool.query("SELECT * FROM food_option");
        res.json(all_options.rows)
    } catch (error) {
        
    }
}
module.exports = {
    addOption,
    getOption,
}