const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateRegisterInput(data){
  let error={};
  data.name=!isEmpty(data.name) ? data.name :'';
  data.email=!isEmpty(data.email) ?data.email :'';
  data.password=!isEmpty(data.password) ?data.password:'';


  
  if(!validator.isLength(data.name,{min:2,max:30})){
      error.name="minimum length 2 and max 30";
  }
  if(validator.isEmpty(data.name)){
    error.name=" name fielf is empty"; 
  }

  
  if(!validator.isEmail(data.email)){
      error.email="valid email require";
      
  }
  if(validator.isEmpty(data.email)){
    error.email=" email fielf is empty"; 
  }

  
  if(!validator.isLength(data.password,{min:6,max:30})){
      error.password="minimum length 6 and max 30";
  }
  if(validator.isEmpty(data.password)){
    error.password=" password fielf is empty"; 
  }

 

  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}