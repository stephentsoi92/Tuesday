function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "password"){
    alert ("Login successfully");
    window.location.href = "../calendar.html";

      }
      else{
        alert("Invalid username or password");
        }
      return false;
      }