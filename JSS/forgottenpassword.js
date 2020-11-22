let email1=document.getElementById("email1");
let email2=document.getElementById("email2");

let error1=document.getElementById("error1");
let error2=document.getElementById("error2");

let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

  // + one or more
function emailValidation(){

  if(regexp.test(email1.value) )
  {
    error1.innerHTML="Valid Email address.";
    error1.style.color="green";
    return email2Validation();
    
  }
 else{

    error1.innerHTML="Invalid Email address or account don't exist.";
    error1.style.color="red";
    return false;

     } 
  
}

function email2Validation(){

    if(regexp.test(email2.value) && email2.value==email1.value)
    {
      error2.innerHTML="Email address confirmed.";
      error2.style.color="green";
      return true;
      
    }
   else{
  
      error2.innerHTML="Invalid confirmation, please enter the Email entered above.";
      error2.style.color="red";
      return false;
  
       } 
    
  }