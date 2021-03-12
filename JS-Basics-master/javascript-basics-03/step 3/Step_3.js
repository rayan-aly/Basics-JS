const txt =document.getElementById("text");

const green=document.querySelector(".green");
const red=document.querySelector(".red");

const blue=document.querySelector(".blue");

green.addEventListener("click",function(){
   txt.style.color="green";
})
red.addEventListener("click",function(){
    txt.style.color="red";
})
blue.addEventListener("click",function(){
    txt.style.color="blue";
})

