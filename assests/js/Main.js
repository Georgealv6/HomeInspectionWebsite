// nav bar across pages
$(function () {
  $("#navbar").load("navbar.html");
});

// footer across pages
$(function () {
  $("#footer").load("footer.html");
});

// icons animation

$(".fa-facebook").hover(
  function () {
    $(this).addClass("fa-bounce");
  },
  function () {
    $(this).removeClass("fa-bounce");
  }
);

$(".fa-instagram").hover(
  function () {
    $(this).addClass("fa-bounce");
  },
  function () {
    $(this).removeClass("fa-bounce");
  }
);

// image pop up for gallery

$(document).ready(function () {
  var popup_btn = $(".popup-btn");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
