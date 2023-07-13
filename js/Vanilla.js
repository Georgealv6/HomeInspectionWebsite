// animation on page

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-away");
    }
  });
});

// class animations

const animatedLeft = document.querySelectorAll(".fade-left");
animatedLeft.forEach((el) => observer.observe(el));

const animatedRight = document.querySelectorAll(".fade-right");
animatedRight.forEach((el) => observer.observe(el));

const animatedUp = document.querySelectorAll(".fade-up");
animatedUp.forEach((el) => observer.observe(el));

const animatedUp2 = document.querySelectorAll(".fade-up2");
animatedUp2.forEach((el) => observer.observe(el));

// slideshow

const swiper = new swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
