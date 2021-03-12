var img1= document.querySelector("#image1");
var img2= document.querySelector("#image2");
var img3= document.querySelector("#image3");
var img4= document.querySelector("#image4");
var img5= document.querySelector("#image5");

function swap(img,srcs){
  img.src=srcs;
}
function reswap(img,srcs){
    img.src=srcs;
}

img1.addEventListener("mouseover", function Swap() {
    swap(img1,"images/image1_2.jpg") ;

});
img2.addEventListener("mouseover",function Swap() {
    swap(img2,"images/image2_2.jpg") ;

});
img3.addEventListener("mouseover",function Swap() {
    swap(img3,"images/image3_2.jpg") ;

});
img4.addEventListener("mouseover",function Swap() {
    swap(img4,"images/image4_2.jpg") ;

});
img5.addEventListener("mouseover",function Swap() {
    swap(img5,"images/image5_2.jpg") ;

});

 
img1.addEventListener("mouseout", function Swap() {
    reswap(img1,"images/image1.jpg") ;

});
img2.addEventListener("mouseout",function Swap() {
    reswap(img2,"images/image2.jpg") ;

});
img3.addEventListener("mouseout",function Swap() {
    reswap(img3,"images/image3.jpg") ;

});
img4.addEventListener("mouseout",function Swap() {
    reswap(img4,"images/image4.jpg") ;

});
img5.addEventListener("mouseout",function Swap() {
    reswap(img5,"images/image5.jpg") ;

});
