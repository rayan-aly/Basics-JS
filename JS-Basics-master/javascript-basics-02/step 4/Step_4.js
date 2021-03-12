
const butto=document.querySelector("button");

butto.addEventListener("click",Reset);
function Reset(){
    var conf= confirm("are you sure ?");
    if(conf==true){
       var name= document.querySelector("#name").value="";
        var surn=document.querySelector("#surname").value="";
       var c= document.querySelector("#city").value="";
    }
}
