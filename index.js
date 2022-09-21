//SWIPER 1

let slidesNum = (window.innerWidth < 1280)?'auto':4;
let sliderGap = (window.innerWidth < 1280)? 24: 40;
var swiper1 = new Swiper(".mySwiper1", {
  breakpoints: {
    100: {
      slidesPerView: 'auto',
      spaceBetween: 24
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1024:{
      slidesPerView:3
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  center: true,
  spaceBetween: sliderGap,
  loop: true,
});
var swiper11 = new Swiper(".mySwiper11", {
  breakpoints: {
    100: {
      slidesPerView: 'auto',
      spaceBetween: 24
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1024:{
      slidesPerView:3
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  center: true,
  loop: true,
});
var swiper12 = new Swiper(".mySwiper12", {
  breakpoints: {
    100: {
      slidesPerView: 'auto',
      spaceBetween: 24
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1024:{
      slidesPerView:3
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  center: true,
  loop: true,
});


swiper12.slideNext();
swiper12.slidePrev();
swiper11.slidePrev();
swiper11.slideNext();

let activeSwiper = document.querySelector(".mySwiper1").swiper;
  let slideBtnRight = document.querySelector(".slide-to-right");
  let slideBtnLeft = document.querySelector(".slide-to-left");
  slideBtnLeft.addEventListener("click", () => {
    activeSwiper.slidePrev();
  });
  slideBtnRight.addEventListener("click", () => {
    activeSwiper.slideNext();
  });

  //CHANGING SWIPERS

  let swiperLinks = document.querySelectorAll(".swiper-link");
  let swipers = document.querySelectorAll(".mySwiper1, .mySwiper11, .mySwiper12")
  let swiperTextBoxes = document.querySelectorAll('.swiper-text')
  swiperLinks.forEach((el, i, arr) =>{
    changeSwiper(el,i,arr);
  })

  function changeSwiper(el, i, arr){
    el.addEventListener("click", (e)=>{
        arr.forEach((el)=>
        {
          if(el == e.target){el.classList.add('before:bg-purple-7F9', 'text-black')
        el.classList.remove('text-grey-8E')}
        else{
          el.classList.remove('before:bg-purple-7F9', 'text-black')
          el.classList.add('text-grey-8E')
        }})

        let index = e.target.dataset.index;
        swipers.forEach((el,i,arr)=>{
          if(i == index){
            el.classList.remove("hidden")
          }else
          el.classList.add('hidden')
        })

        let keyword;

        if(index == 0) keyword = "Fulltime";
        if(index == 1) keyword = "Part Time";
        if(index == 2) keyword = "Remote";
        activeSwiper = swipers[index].swiper;
        swiperTextBoxes[0].textContent = `14k+ ${keyword} Job Available For You`
        swiperTextBoxes[1].textContent = `View All ${keyword} Job`
        

    });
  }

// SWIPER 2
  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    center: true,
    spaceBetween: 21,
    loop: true,
  });
  let swiper22 = new Swiper(".mySwiper22", {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: -400,
    center: true,
    coverflowEffect:{
      rotate:0,
      stretch: 0,
      depth: 80,
      modifier: 10,
      slideShadows: false,
    },
    loop: false,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });

  let slidesCount = swiper22.slides.length;
  swiper22.slideTo(slidesCount/2, false,false);

  
  
  const mySwiper2 = document.querySelector(".mySwiper2").swiper;
    let slideBtnRight2 = document.querySelector(".slide-to-right");
    let slideBtnLeft2 = document.querySelector(".slide-to-left");

//HAMBURGER MENU and NAVIGATION APPEAR/DISAPPEAR

let hamburgerBtn = document.querySelector(".hamburger-menu")
let mobileNav = document.querySelector(".mobile-navigation")
let navLinks = document.querySelectorAll(".nav-link")
let navBar = document.querySelector(".navigation")

hamburgerBtn.addEventListener('click',() => {toggleMobileNav()})
navLinks.forEach((el)=>{
  el.addEventListener("click", ()=>{toggleMobileNav()});
})

function toggleMobileNav(){
  if(mobileNav.classList.contains("translate-x-full"))
  {
    mobileNav.classList.remove("translate-x-full")
    navBar.classList.remove("bg-opacity-90")
    navBar.classList.add("bg-opacity-0")
  }
    else
    {
      mobileNav.classList.add("translate-x-full")
      navBar.classList.add("bg-opacity-90")
    navBar.classList.remove("bg-opacity-0")
  }
}

let lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && st > 5){
     navBar.classList.add('-translate-y-full');
     navBar.classList.remove('bg-opacity-90');
     navBar.classList.add('bg-opacity-0');
  } else if(st<5)
  {
    navBar.classList.remove('bg-opacity-90');
    navBar.classList.add('bg-opacity-0');
}
  else{
   navBar.classList.remove('-translate-y-full');
   navBar.classList.add('bg-opacity-90');
   navBar.classList.remove('bg-opacity-0');
  }
  lastScrollTop = st <= 0 ? 0 : st; 
}, false);
console.log("blaa")

//SWIPER SHADOW FIX


function getHiddenSlides(){

}