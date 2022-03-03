const Employee = require("../models/employee-model");

//GET
let GetEmployees = async (req, res) => {
  await Employee.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetEmployeesById = async (req, res) => {
  await Employee.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};
//POST
let PostEmployees = async (req, res) => {
  await Employee.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//PUT
let PutEmployees = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ massage: error }));
};

//DELETE
let DeleteEmployees = (req, res) => {
  Employee.delete(req.body).then((data) => {
    res.send(data);
  })
  .catch((err) => res.status(404).send({ massage: error }));
};

module.exports = {
  GetEmployees,
  PostEmployees,
  PutEmployees,
  DeleteEmployees,
  GetEmployeesById,
};
