function validatePassword(form){
    var  reg_email= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     var email=form.email.value;
     var pwd=form.password.value;
     var pwd1=form.password1.value;
     var reg_ph=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
     var ph=form.phone.value;
     if(reg_ph.test(ph)==true)
     {
       if(reg_email.test(email)==true){
        if(pwd==pwd1)
        {
          alert("Welcome");
        }
        else
        {
          alert("Password does not match")
          return false
        }
      }
        else
        {
            alert("Invalid user id")
            return false
        }
     }
    else 
    { alert("Invalid phone number");
       return false
    }
 }
 
 