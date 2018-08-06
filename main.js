function valid() {
    
   let name= document.getElementById("but1").value;
   let address= document.getElementById("but2").value;
   let mail=document.getElementById("but3").value;
   let password=document.getElementById("but4").value;
   let comment=document.getElementById("but5").value;
   if (name=="" || address=="" || mail=="" || password=="" || comment=="" ) {
   alert ("Please fill in all fields ") 
   
    }
   if ( password !=="" && (password.length<8 || password.search(/[a-z]/) == -1|| password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1)) {
   alert ("Password should have more than 8 characters, contain numbers and at least a capital letter")
   }
   if ( mail !=="" && (mail.search(/@/) == -1 || mail.search(/[.]/) == -1) ) {
       alert ("Please enter a valid e-mail address")
   }

}
   
       function validmail() {
        let mail=document.getElementById("but3").value;
        if  (mail.search(/@/) == -1 || mail.search(/[.]/) == -1)  {
            alert ("Please enter a valid e-mail address")
        }
       }

       function validpassword() {
       let password=document.getElementById("but4").value;
        if ( password.length<8 || password.search(/[a-z]/) == -1|| password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1) {
            alert ("Password should have more than 8 characters, contain numbers and at least a capital letter")
            }
    }
     
    
    function focusF(col) {
       
        if(col.value =="") {
        col.style.borderColor="red"; }
        else {
            col.style.borderColor="black";

        }
     }
     focusF(document.getElementById("but1"));
     focusF(document.getElementById("but2"));
     focusF(document.getElementById("but3"));
     focusF(document.getElementById("but4"));
     focusF(document.getElementById("but5"));
 




    
    



