const {Router} = require("express");
const { orderFood, ViewOrderHistory, deleteOrder } = require("../controllers/employee_controller");

const EmployeeRouters = Router();

EmployeeRouters.route('/order-food/').post(orderFood)
EmployeeRouters.route('/my-order/:id').get(ViewOrderHistory)
EmployeeRouters.route('/delete-order/:orderId').delete(deleteOrder)
module.exports = EmployeeRouters;