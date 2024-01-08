
$(document).ready(function () {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

// start product section 
// let btn1  = document.getElementById("btn1")
// let btn2  = document.getElementById("btn2")
// let btn3  = document.getElementById("btn3")
// let section1 = document.getElementById("section1");
// let section2 = document.getElementById("section2");
// let section3 = document.getElementById("section3");

// function showhide2() {
//   section1.style.display = "none";
//   section3.style.display = "none";
//   section2.style.display = "block";

// }
// function showhide3() {
//   section1.style.display = "none";
//   section2.style.display = "none";
//   section3.style.display = "block";
// }
// function showhide1() {
//   section3.style.display = "none";
//   section2.style.display = "none";
//   section1.style.display = "block";
// }
// end product section 
