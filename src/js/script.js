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
let sidebar = document.querySelector('.sidebar');
let overlaySidebar = document.querySelector('.overlay-sidebar');

burgerMenu.addEventListener('click', function(){
    sidebar.classList.add('show')
    overlaySidebar.classList.add('show-overlay-sidebar')
});
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show')
    overlaySidebar.classList.remove('show-overlay-sidebar')
});



// MAGNIFIC POPUP

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});