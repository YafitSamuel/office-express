const express= require ('express')
const router= express.Router()

const Employees=require('../controller/employees-controller') 

router.get("/employees",Employees.GetEmployees)

router.get("/employees/:id",Employees.GetEmployees)

router.post("/employees",Employees.PostEmployees)

router.put("/employees/:id",Employees.PutEmployees )

router.delete("/employees/:id", Employees.DeleteEmployees)

module.exports = router;