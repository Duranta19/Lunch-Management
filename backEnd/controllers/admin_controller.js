const pool = require("../dbConnect");

const date = new Date();
const addOption =  async (req,res) => {
    const {option_name, items, total_cal} = req.body;
    // console.log(req.body);
    const img_path = req.file ? req.file.path : null;


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
module.exports = {
    addOption,
    getOption,
    deleteOption,
}