const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  // Get Current Class
  const current = document.querySelector(".current");
  // Remove Current Class
  current.classList.remove("current");
  // Checking for next slide
  if (current.nextElementSibling) {
    // Adding current class to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Adding current class to the start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get Current Class
  const current = document.querySelector(".current");
  // Remove Current Class
  current.classList.remove("current");
  // Checking for prev slide
  if (current.previousElementSibling) {
    // Adding current class to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Adding current class to the last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events

next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto Slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
