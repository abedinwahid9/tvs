// navbar toggler
const toggleBtn = document.querySelector("#toggle-btn");
const navbarDropdown = document.querySelectorAll(".navbarDropdown");

toggleBtn.addEventListener("click", () => {
  for (let i = 0; i < navbarDropdown.length; i++) {
    navbarDropdown[i].classList.toggle("hidden");
    navbarDropdown[i].classList.toggle("flex");
  }
});

// banner swiper carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  speed: 1200,
  loop: true,

  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  },
});

// explore our vechiles
// motorcycle
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiperbutton2-next",
    prevEl: ".swiperbutton2-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// sccoters
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiperbutton3-next",
    prevEl: ".swiperbutton3-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// explore our vechiles tab functionality
const category = document.querySelectorAll(".category");

const motorcycles = document.querySelector(".motorcycles");
const sccoters = document.querySelector(".sccoters");

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", () => {
    if (category[i].innerText === "SCCOTERS") {
      motorcycles.classList.add("hidden");
      sccoters.classList.remove("hidden");
    } else {
      motorcycles.classList.remove("hidden");
      sccoters.classList.add("hidden");
    }
  });
}

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiperbutton-next4",
    prevEl: ".swiperbutton-prev4",
  },
});
