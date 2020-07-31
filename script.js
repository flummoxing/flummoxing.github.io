
console.log("hi");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", carousel());

function nextSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function carousel() {
  var i;
  let slides = document.getElementsByClassName("carousel-slide");

  console.log("The slides are: ", slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  console.log("The slides are: ", slides);
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  console.log("The slides are: ", slides);
  console.log("Slide at index", slideIndex-1, "is", slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
  setTimeout(carousel, 7000);
}




// document.addEventListener("DOMContentLoaded", showSlides());
//
//
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//     console.log(slides);
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   console.log(slideIndex);
//   console.log(slides[1]);
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// var slide_index = 1;
// displaySlides(slide_index);
// function nextSlide(n) {
//     displaySlides(slide_index += n);
// }
// function currentSlide(n) {
//     displaySlides(slide_index = n);
// }
// function displaySlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slide_index = 1 }
//     if (n < 1) { slide_index = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slide_index - 1].style.display = "block";
//   }
