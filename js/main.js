$(document).ready(function () {
  document.querySelector(".subscribe__button").style.cursor = "not-allowed";
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    autoplay: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  $(".newsletter").parallax({ imageSrc: "./img/newsletter-bg.jpeg" });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке мыши");
    document.querySelector(".nav").classList.toggle("nav--visible");
    document.querySelector("body").classList.toggle("preventScroll");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keyup(keyCloseModal);

  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").css("overflow", "auto");
  }

  function keyCloseModal(e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow", "auto");
    }
  }

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be no shorter than 2 characters",
        },
        email: {
          required: "Please specify your email addres",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone",
          minlength: "The name must be no shorter than 10 characters",
        },
      },
    });
  });

  $(".input-phone").mask("+7(999)999-99-99");

  AOS.init();
});

function handleClickNewsLetter(e) {
  var input = document.querySelector("#newsletterInput");
  if (input.value.length < 5) {
    e.preventDefault();
  }
}

function handleInput(e) {
  let btn = document.querySelector(".subscribe__button");
  if (e.target.value.length > 4) {
    btn.disabled = false;
    btn.style.cursor = "pointer";
  } else {
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
  }
}
