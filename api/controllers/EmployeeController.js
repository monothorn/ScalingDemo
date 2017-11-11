module.exports={
  create:function(request,response){
   var empObj = new EmployeeService();
   empObj.add(request.params.all(),function(err,result){
     if(err)response.badRequest(result);
     response.send(result);
   });
  },
  modify:function(request,response){
    var empObj = new EmployeeService();
    empObj.modify(request.params.all(),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  },
  modifyById:function(request,response){
    var empObj = new EmployeeService();
    empObj.modifyById(request.params.all(),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  },
  get:function(request,response){
    var empObj = new EmployeeService();
    empObj.get(request.param('id'),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  }
}
;
