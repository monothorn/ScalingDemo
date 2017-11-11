module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  'POST /employee':'EmployeeController.create',
  'PUT /employee':'EmployeeController.modify',
  'PUT /employee/:id':'EmployeeController.modifyById',
  'GET /employee':'EmployeeController.get'
};
