$(document).ready(function () {
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
        },
      },
    });
  });
});
