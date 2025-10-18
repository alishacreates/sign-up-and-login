function hidenavbar(){
     document.getElementById("nav").style.display = "none";
    }
function LoginSignup(){
     document.getElementById("nav").style.display = "none";
     document.getElementById("Login").style.display = "none";
     document.getElementById("sign-up").style.display = "none";
    document.getElementById("Welcome").style.display = "block";
}
function shownavbar(){
     document.getElementById("nav").style.display = "flex";
     document.getElementById("Login").style.display = "";
     document.getElementById("sign-up").style.display = "";
     document.getElementById("Welcome").style.display = "none";
    }