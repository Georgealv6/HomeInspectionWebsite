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

// contact form

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

// slideshow

const swiper = new Swiper(".swiper", {
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
