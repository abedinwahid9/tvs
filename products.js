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

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 5,
  loop: true,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperbuttonnext",
    prevEl: ".swiperbuttonprev",
  },
});
