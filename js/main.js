$(document).ready(function () {
  var gradient =
    "linear-gradient(rgba(29, 27, 27, 0.52) 0%, rgb(87 85 85 / 14%) 70%, rgba(29, 27, 27, 0) 100%)";
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header nav").addClass("fixed-top");
      $("header nav").addClass("white-background");
      $("header nav .nav-link").css("color", "#1D1B1B");
      $("header nav .login-link").css("color", "#1D1B1B");
      $("header nav .navbar-toggler .toggle-icon").css("color", "#1D1B1B");
      $(".navbar").css("background-image", "none");
    } else {
      $("header nav").removeClass("fixed-top");
      $("header nav").removeClass("white-background");
      $("header nav .login-link").css("color", "#FEFEFE");
      $("header nav .nav-link").css("color", "#FEFEFE");
      $("header nav .navbar-toggler .toggle-icon").css("color", "#FEFEFE");
      $(".navbar").css("background-image", gradient);
    }
  });
});
