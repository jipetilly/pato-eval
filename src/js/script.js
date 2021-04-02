
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


// NAVIGATION

let maNav = document.querySelector('.main-nav');
let logo = document.querySelector('.logo');

window.addEventListener('scroll', function(){
    let scrolled = window.pageYOffset;
    if(scrolled > maNav.clientHeight){
        maNav.classList.add("scroll-down");
        logo.src = "img/logo2.png";
    }
    else{
        maNav.classList.remove("scroll-down");
        logo.src = "img/logo.png";
    }
});


// BURGER MENU

let burgerMenu = document.querySelector('.burger-menu');
let closeBtn = document.querySelector('.close');
let sideMenu = document.querySelector('.sidemenu');
let overlaySideMenu = document.querySelector('.overlay-sidemenu');

burgerMenu.addEventListener('click', function(){
    sideMenu.classList.add('show')
    overlaySideMenu.classList.add('show-overlay-sidemenu')
});
closeBtn.addEventListener('click', function(){
    sideMenu.classList.remove('show')
    overlaySideMenu.classList.remove('show-overlay-sidemenu')
});

