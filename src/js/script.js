// SWIPER JS

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
  },
  effect: 'fade',
  loop: true,
      // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// PARALLAX 

// $('.parallax-window').parallax({imageSrc: '/img/bg-intro-01.jpg'});


// NAVIGATION

window.addEventListener("scroll", function () {
    var e = window.pageYOffset,
        s = (document.getElementById("nav"), document.getElementById("header"));
    console.log(e), e >= 100 ? s.classList.add("nav-js") : s.classList.remove("nav-js");
});


















//navigation scroll-down
let mainNav = document.querySelector('.main-nav');
window.addEventListener('scroll', function(){
    window.pageYOffset > mainNav.clientHeight ? mainNav.classList.add("scroll-down") : mainNav.classList.remove("scroll-down");
});