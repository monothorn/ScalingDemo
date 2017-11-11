module.exports={
  /**
   * @api {post} /employee Create Employee
   * @apiName CreateEmployee
   * @apiGroup Employee
   *
   * @apiParam {String} name
   * @apiParam {String} contactNumber
   * @apiParam {Number} age
   * @apiParam {Date} dob
   * @apiParamExample {json} Request-Example:
   * {
   *     "name": "Pikachu",
   *     "contactNumber":121212121,
   *     "age":13,
   *     "dob":"July 14 1555"
    }
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "name": "Pikachu",
   *   "contactNumber": "121212121",
   *   "age": 13,
   *   "dob": "1555-07-14T00:00:00.000Z",
   *   "createdAt": "2017-11-11T11:24:07.329Z",
   *   "updatedAt": "2017-11-11T11:24:07.329Z",
   *   "id": "5a06ddd7e58889db2a3376a0"
   * }
   */
  create:function(request,response){
   var empObj = new EmployeeService();
   empObj.add(request.params.all(),function(err,result){
     if(err)response.badRequest(result);
     response.send(result);
   });
  },
  /**
   * @api {put} /employee Update Employee
   * @apiName UpdateEmployee
   * @apiGroup Employee
   *
   * @apiParamExample {json} Request-Example:
   * {
   *   "before":{
   *     "age":13
   *   },
   *
   *   "after":{
   *     "age":14
   *   }
   * }
   * @apiSuccessExample {json} Success-Response:
   * [
   *  {
   *      "name": "Pikachu",
   *      "contactNumber": "121212121",
   *      "age": 14,
   *      "dob": "1555-07-14T00:00:00.000Z",
   *      "createdAt": "2017-11-11T11:24:07.329Z",
   *      "updatedAt": "2017-11-11T11:24:42.615Z",
   *      "id": "5a06ddd7e58889db2a3376a0"
   *  }
   *  ]
   */
  modify:function(request,response){
    var empObj = new EmployeeService();
    empObj.modify(request.params.all(),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  },
  /**
   * @api {put} /employee/:id Update Employee By Id
   * @apiName UpdateEmployeeById
   * @apiGroup Employee
   * @apiParam {Number} id
   * @apiParamExample {json} Request-Example:
   * {
   *   "after":{
   *     "name":"Walter White"
   *   }
   * }
   * @apiSuccessExample {json} Success-Response:
   * [
   *{
   *    "name": "Walter White",
   *    "contactNumber": "121212121",
   *    "age": 101,
   *    "dob": "1555-07-14T00:00:00.000Z",
   *    "createdAt": "2017-11-11T11:24:07.329Z",
   *    "updatedAt": "2017-11-11T11:28:41.432Z",
   *    "id": "5a06ddd7e58889db2a3376a0"
   *}
   *]
   */
  modifyById:function(request,response){
    var empObj = new EmployeeService();
    empObj.modifyById(request.params.all(),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  },
  /**
   * @api {get} /employee Get Employee details
   * @apiName GetEmployee
   * @apiGroup Employee
   *
   * @apiParam {Number} id
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "name": "Walter White",
   *   "contactNumber": "121212121",
   *   "age": 101,
   *   "dob": "1555-07-14T00:00:00.000Z",
   *   "createdAt": "2017-11-11T11:24:07.329Z",
   *   "updatedAt": "2017-11-11T11:24:07.329Z",
   *   "id": "5a06ddd7e58889db2a3376a0"
   * }
   */
  get:function(request,response){
    var empObj = new EmployeeService();
    empObj.get(request.param('id'),function(err,result){
      if(err)response.badRequest(err.result);
      response.send(result);
    })
  }
}
;
