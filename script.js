/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);



/*=============== SWIPER PRICES ===============*/
const swiperPrices = new Swiper('.prices__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});




/*=============== PRO-LEVEL SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    delay: 100,
    reset: true /* Pro Feature: Page scroll karne par har dafa animation chalegi */
});

/* Home, Prices aur Logo Slider (Upar se aayenge) */
sr.reveal(`.home__data, .prices__data, .partners__slider`);

/* Blue Box (Neechay se chota hoke popup hoga) */
sr.reveal(`.home__content`, { delay: 300, origin: 'bottom', scale: 0.9 });

/* Delivery, About & Contact Info (Left se udte hue aayenge) */
sr.reveal(`.delivery__data, .about__data, .contact__data`, { origin: 'left' });

/* Unki Tasveerein aur Maps (Right se aayenge) */
sr.reveal(`.delivery__content, .about__img, .contact__map, .contact__form`, { origin: 'right', delay: 300 });

/* Prices Boxes */
sr.reveal(`.prices__content`, { origin: 'bottom', delay: 300 });



/* type.js */

var typed = new Typed('.auto-type', {
  
  strings: ['Medical Service.', 'Health Consultations.', 'Expert Doctor Care.'],
  typeSpeed: 80,       
  backSpeed: 50,       
  backDelay: 1500,     
  loop: true           
});



/*=============== PLAY VIDEO ON SCROLL ===============*/
const myVideo = document.getElementById('my-video');

if(myVideo){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jab video screen par 30% nazar aa jaye toh Play kar do
            if(entry.isIntersecting){
                myVideo.play();
            } 
            // Jab video screen se nikal jaye toh Pause kar do taake data bache
            else {
                myVideo.pause();
            }
        });
    }, { threshold: 0.3 }); // 0.3 ka matlab hai 30% visibility

    observer.observe(myVideo);
}


/*=============== VIP DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');

// Page load hone par check karo ke kya user ne pehle se Dark Mode lagaya tha?
if (localStorage.getItem('selected-theme') === 'dark') {
    document.body.classList.add('dark-theme');
    // Agar dark theme on hai, toh moon icon ko hata kar sun icon laga do
    themeButton.classList.replace('ri-moon-fill', 'ri-sun-fill');
}

// Button par click karne ka function
themeButton.addEventListener('click', () => {
    // 1. Body par dark theme lagao ya hatao
    document.body.classList.toggle('dark-theme');
    
    // 2. Icon ko Moon se Sun (ya Sun se Moon) mein badlo
    if(themeButton.classList.contains('ri-moon-fill')) {
        themeButton.classList.replace('ri-moon-fill', 'ri-sun-fill');
    } else {
        themeButton.classList.replace('ri-sun-fill', 'ri-moon-fill');
    }
    
    // 3. User ki is pasand ko Local Storage mein save kar lo taake refresh par zaya na ho
    localStorage.setItem('selected-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});