module.exports ={

  attributes:{
    name: {
      type: 'string',
      required: true
    },
    contactNumber:{
      type: 'string',
      required: true
    },
    age:{
      type: 'integer',
      required: true
    },
    dob:{
      type: 'datetime',
    }
  },
  createEmployee:function(data,cb){
    var normalData = {};
    normalData.name = data.name;
    normalData.contactNumber = data.contactNumber;
    normalData.age = parseInt(data.age);
    normalData.dob = new Date(data.dob);

    Employee.create(normalData).exec(function(err,result){
      if (err) { cb(true,err.message); }
      sails.log('Employee created with id :', result.id);
      cb(false,result);
    });

  },
  updateEmployee:function(data,cb){
    if(_.has(data,'before') && _.has(data,'after')){
      if(_.has(data.before, 'age')){
        data.before.age = parseInt(data.before.age);
      }
      if(_.has(data.before, 'dob')){
        data.before.dob = new Date(data.before.dob);
      }
      if(_.has(data.after, 'age')){
        data.after.age = parseInt(data.after.age);
      }
      if(_.has(data.after, 'dob')){
        data.after.dob = new Date(data.after.dob);
      }


      Employee.update(data.before,data.after).exec(function(err,result){
        if (err) { cb(true,err.message); }
        sails.log('Employee updated ');
        cb(false,result);
      });
    }else{
      cb(false,'Invalid input provided!');
    }

  },
  updateEmployeeById:function(data,cb){
    if( _.has(data,'after')){
      if(_.has(data.after, 'age')){
        data.after.age = parseInt(data.after.age);
      }
      if(_.has(data.after, 'dob')){
        data.after.dob = new Date(data.after.dob);
      }


      Employee.update({'id':data.id},data.after).exec(function(err,result){
        if (err) { cb(true,err.message); }
        sails.log('Employee updated ');
        cb(false,result);
      });
    }else{
      cb(false,'Invalid input provided!');
    }

  },
  getEmployee:function(id,cb){
    Employee.findOne(id,function(err,result){
      if (err) { cb(true,err.message); }
      cb(false,result);
    })
  }

};
