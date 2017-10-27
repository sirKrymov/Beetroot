$(document).ready(function () {
  
  // Slider main section
  $('#main-screen__slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  });

  // Slider work
  $('#work__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    prevArrow: '<button type="button" class="work__slider-btn work__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="work__slider-btn work__slider-btn--next"><span class="ion-chevron-right"></span></button>',
  });

  //back to top
  if ($('#button-up').length) {
    let scrollTrigger = 300, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#button-up').addClass('is-visible');
        } else {
          $('#button-up').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#button-up').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  }

  //Slow scroll from menu-item to current section
  $(".header__nav-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

  //E-mail Ajax Send
  $("#contact-form").submit(function () { //Change name-class or id form
    let form = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php", //Change way to file mail.php
      data: form.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        form.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Fixed sticky aside menu
  let menu = $(".header");
  fixed_menu = "header--fixed";
  menuPos = menu.offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > menuPos) {
      menu.addClass(fixed_menu);
    } else {
      menu.removeClass(fixed_menu);
    }
  });

  // Set active element in color
  $('.header__nav-item').click(function(e) {
    e.preventDefault();
    $('.header__nav a').removeClass('header__nav-item--active');
    $(this).addClass('header__nav-item--active');
  });

  // tabs
  $('[data-tab-nav]').on('click', function () {
    var that = $(this),
      tabs = $('.about__tab-content > div');
    $('.about__tab-menu li').removeClass('active');
    $(that).addClass('active');
    $(tabs).removeClass('active');
    $('[' + $(that).attr("data-tab-nav") + ']').addClass('active');
  });

  // modal show
  $('#show-modal').click(function() {
    $('#modal').addClass('modal--show');
  });

  // modal hide
  $('.modal__btn--hide').click(function() {
    $('#modal').removeClass('modal--show');
  });

  // // modal hide by click in dark area
  // $(":not(.modal__content)").click(function () {
  //   $(this).removeClass('modal--show');
  // });



});