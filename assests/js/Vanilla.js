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
// nav scroll
