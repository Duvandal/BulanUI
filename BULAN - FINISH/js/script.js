// untuk buka hamburger harus klik 2x
$(document).ready(function(){
  var currIdx = 1;

  function sliding(){
      if(currIdx !=2){
          $('.slider').animate({left: "-100%"},1500);
          currIdx++;
      }
      else{
          $('.slider').animate({left: 0},1500);
          currIdx = 0;
      }
  }
  setInterval(sliding,10000)
});

function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    y.style.left ="50px";
    x.style.left ="450px";
    z.style.left ="0";
}
function login() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    y.style.left ="-400px";
    x.style.left ="50px";
    z.style.left ="110px";
}
// var slideIndex = 1;

// var myTimer;

// var slideshowContainer;

// window.addEventListener("load",function() {
//     showSlides(slideIndex);
//     myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
//     //auto slide pause
//     // slideshowContainer = document.getElementsByClassName('slides')[0];
  
//     //auto slide jalan
//     slideshowContainer = document.getElementsByClassName('slider')[0];
  
//     slideshowContainer.addEventListener('mouseenter', pause)
//     slideshowContainer.addEventListener('mouseleave', resume)
// })

// // NEXT AND PREVIOUS CONTROL
// function plusSlides(n){
//   clearInterval(myTimer);
//   if(n < 0){
//     showSlides(slideIndex -= 1);
//   } 
//   else{
//     showSlides(slideIndex += 1); 
//   }
//   if (n === -1){
//     myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//   } 
//   else {
//     myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   }
// }

// //Controls the current slide and resets interval if needed
// function currentSlide(n){
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   showSlides(slideIndex = n);
// }

// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// pause = () => {
//   clearInterval(myTimer);
// }

// resume = () =>{
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }

//Harap klik picture kedua sebanyak 2 kali supaya dapat mengganti gambar menjadi lebih besar 
function picture(){
    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }
}
