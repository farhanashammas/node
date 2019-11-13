
function validate(form){
   var  reg_email= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=form.email.value;
    if(reg_email.test(email)==true)
        alert("Welcome");
   else 
    {
        alert("Invalid username");
        return false
    }
}

