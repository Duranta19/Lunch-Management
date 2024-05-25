const {Router} = require("express");
const { orderFood, ViewOrderHistory } = require("../controllers/employee_controller");

const EmployeeRouters = Router();

EmployeeRouters.route('/order-food/:optId').get(orderFood)
EmployeeRouters.route('/my-order').get(ViewOrderHistory)

module.exports = EmployeeRouters;