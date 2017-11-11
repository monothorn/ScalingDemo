var _ = require('lodash');
class EmployeeService
{
  constructor(){

  }
  modify(data,cb){
    Employee.updateEmployee(data,function(err,result){
      if(err)cb(true,result);
      cb(false,result);
    });
  }
  modifyById(data,cb){
    Employee.updateEmployeeById(data,function(err,result){
      if(err)cb(true,result);
      cb(false,result);
    });
  }
  add(data,cb){
    Employee.createEmployee(data,function(err,result){
      if(err)cb(true,result);
      cb(false,result);
    });
  }
  get(data,cb){
    Employee.getEmployee(data,function(err,result){
      if(err)cb(true,result);
      cb(false,result);
    });
  }
}

module.exports = EmployeeService;
