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
  spaceBetween: 10,
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

// dynamic bike show
const bikeDisplay = document.querySelector(".bikedisplay");
const motorbike = document.querySelectorAll(".motorbike");
const sccotersactive = document.querySelectorAll(".sccotersactive");

motorbike.forEach((slide) => {
  slide.addEventListener("click", () => {
    motorbike.forEach((slide) => {
      slide.classList.remove("active");
    });
    slide.classList.add("active");
  });
});

sccotersactive.forEach((slide) => {
  slide.addEventListener("click", () => {
    sccotersactive.forEach((slide) => {
      slide.classList.remove("active");
    });
    slide.classList.add("active");
  });
});

const bikes = [
  {
    name: "APACHE RR310",
    engine: 321.2,
    power: 34,
    weight: 175,
    img: "./assets/bike/310.png",
  },
  {
    name: "APACHE RTR 160 4V",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    img: "./assets/bike/160-4V-Centre.png",
  },
  {
    name: "hlx 150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,
    img: "./assets/bike/H150-listing-home.webp",
  },
];

let selectElement = "APACHE RR310";

motorbike.forEach((swiper) => {
  swiper.addEventListener("click", (e) => {
    selectElement = e.target.parentElement.childNodes[1].innerText;
    bikeChange(selectElement);
  });
});

function bikeChange(selectElement) {
  return bikes.forEach((bike) => {
    if (selectElement == bike.name) {
      bikeDisplay.innerHTML = `  <div class="flex justify-evenly w-full">
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/power.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          engine
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${bike.engine} CC
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets//products-page/engine.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          power
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${bike.power} PS
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/compound.png  "
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          weight
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${bike.weight} KG
        </p>
      </div>
      </div>
      <div>
      <img src=${bike.img} alt="" />
      </div>
      <div>
      <a
        href="#"
        class="bg-[#f12b00] lg:text-2xl text-sm py-2 md:px-8 px-4 rounded-sm text-white font-bold aos-init aos-animate"
        >View details</a
      >
      </div>`;
    }
  });
}
bikeChange(selectElement);

// scooters
const sccotersDisplay = document.querySelector(".sccotersdisplay");

const scooters = [
  {
    name: "APACHE RR310",
    engine: 321.2,
    power: 34,
    weight: 175,
    img: "./assets/sccooter/jupiter-listing-home.webp",
  },
  {
    name: "APACHE RTR 160 4V",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    img: "./assets/sccooter/Ntorq-RE.png",
  },
  {
    name: "hlx 150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,
    img: "./assets/bike/H150-listing-home.webp",
  },
];

let sccotersElement = "APACHE RR310";

sccotersactive.forEach((swiper) => {
  swiper.addEventListener("click", (e) => {
    sccotersElement = e.target.parentElement.childNodes[1].innerText;
    sccoterChange(sccotersElement);
  });
});

function sccoterChange(selectElement) {
  return scooters.forEach((sccoter) => {
    if (selectElement == sccoter.name) {
      sccotersDisplay.innerHTML = `  <div class="flex justify-evenly w-full">
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/power.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          engine
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${sccoter.engine} CC
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets//products-page/engine.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          power
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${sccoter.power} PS
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/compound.png  "
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          weight
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${sccoter.weight} KG
        </p>
      </div>
      </div>
      <div>
      <img src=${sccoter.img} alt="" />
      </div>
      <div>
      <a
        href="#"
        class="bg-[#f12b00] lg:text-2xl text-sm py-2 md:px-8 px-4 rounded-sm text-white font-bold aos-init aos-animate"
        >View details</a
      >
      </div>`;
    }
  });
}
sccoterChange(sccotersElement);
