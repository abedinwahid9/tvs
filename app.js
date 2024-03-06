// navbar toggler
const toggleBtn = document.querySelector("#toggle-btn");
const navbarDropdown = document.querySelectorAll(".navbarDropdown");

toggleBtn.addEventListener("click", () => {
  for (let i = 0; i < navbarDropdown.length; i++) {
    navbarDropdown[i].classList.toggle("hidden");
    navbarDropdown[i].classList.toggle("flex");
  }
});

const nav = document.querySelector(".nav");

function scrollNavhide() {
  if (window.scrollY > 200) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
}
// Add an event listener to run the function when the page is scrolled
window.addEventListener("scroll", scrollNavhide);

// Call the function once initially to set the initial state
scrollNavhide();

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

category[0].classList.add("border-b-2", "border-[#f12b00]");

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", () => {
    // Reset borders for all buttons
    for (let j = 0; j < category.length; j++) {
      category[j].classList.remove("border-b-2", "border-[#f12b00]");
    }

    // Add border to the clicked button
    category[i].classList.add("border-b-2", "border-[#f12b00]");

    // Toggle visibility of motorcycles and scooters
    if (category[i].innerText === "SCCOTERS") {
      motorcycles.classList.add("hidden");
      sccoters.classList.remove("hidden");
    } else {
      motorcycles.classList.remove("hidden");
      sccoters.classList.add("hidden");
    }
  });
}
// brand experince section
var swiper = new Swiper(".mySwiper4", {
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
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiperbutton-next4",
    prevEl: ".swiperbutton-prev4",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        // You can do something when a section is in view
        console.log(`Section ${section.id} is in view`);
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
