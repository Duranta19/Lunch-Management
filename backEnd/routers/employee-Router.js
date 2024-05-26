const {Router} = require("express");
const { orderFood, ViewOrderHistory } = require("../controllers/employee_controller");

const EmployeeRouters = Router();

EmployeeRouters.route('/order-food/').post(orderFood)
EmployeeRouters.route('/my-order/:id').get(ViewOrderHistory)

module.exports = EmployeeRouters;