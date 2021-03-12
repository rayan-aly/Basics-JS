
const btn=document.querySelector("button");
btn.addEventListener("click",check);
function check(){
    var pass=document.getElementById("password");
    var Cpass=document.getElementById("confirmation");
    if(pass.value != Cpass.value){
       pass.style.borderColor="red";
       Cpass.style.borderColor="red";
    }
}