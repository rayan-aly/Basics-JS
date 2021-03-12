var img1= document.querySelector("#image1");
var img2= document.querySelector("#image2");
var img3= document.querySelector("#image3");
var img4= document.querySelector("#image4");
var img5= document.querySelector("#image5");

function swap(nb){
    if(nb==1){
        img1.src="images/image1_2.jpg";
    }
    else if(nb==2){
        img2.src="images/image2_2.jpg";   
    }
    else if(nb==3){
        img3.src="images/image3_2.jpg";
    }
    
else if(nb==4){ img4.src="images/image4_2.jpg";}
else if(nb==5){img5.src="images/image5_2.jpg"; }
}
img1.addEventListener("mouseover", function Swap() {
    swap(1) ;

});
img2.addEventListener("mouseover",function Swap() {
    swap(2) ;

});
img3.addEventListener("mouseover",function Swap() {
    swap(3) ;

});
img4.addEventListener("mouseover",function Swap() {
    swap(4) ;

});
img5.addEventListener("mouseover",function Swap() {
    swap(5) ;

});

 
