$(document).ready(function() {

  $("#menu").click(function () {
    $(".header__nav").toggleClass("header__nav--open");
    $(".nav__btn").toggleClass("nav__btn--animate");
  });

});