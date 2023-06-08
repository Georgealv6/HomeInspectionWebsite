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
(function () {
  emailjs.init("bUjUSqA4q278u1hNP");
})();

function sendEmail() {
  var params = {
    fname: document.getElementById("firstname").value,
    lname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
}

const serviceID = "service_jzxkj2e";
const templateID = "template_v0hbkxg";

emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message was sent successfully");
  })
  .catch((err) => console.log(err));

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
