$(document).ready(function() {

  //Fixed sticky menu
  let menu = $(".header");
  fixed_menu = "header--fixed";
  let menu_btn = $(".nav__btn");
  fixed_menu_btn = "nav__btn--fixed";

  menuPos = menu.offset().top;

  $(window).scroll(function() {
    if ($(this).scrollTop() > menuPos) {
      menu.addClass(fixed_menu);
      menu_btn.addClass(fixed_menu_btn);
    } else {
      menu.removeClass(fixed_menu);
      menu_btn.removeClass(fixed_menu_btn);
    }
  });

  //Adaptive menu, animated button
  $("#menu").click(function() {
    $(".header__nav").toggleClass("header__nav--open");
    $(".nav__btn").toggleClass("nav__btn--animate");
    $(".main-screen__slider-item").toggleClass("main-screen__slider-item--adaptive-menu");
  });

  // Slider main section
  $('#main-screen__slider').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        autoplaySpeed: 3000,
        fade: true,
      }
    }]
  });

  // Set active element in color
  $('.nav__item-name').click(function(e) {
    e.preventDefault();
    $('.nav__item-name').removeClass('nav__item-name--active');
    $(this).addClass('nav__item-name--active');
  });

  //Scroll down button main screen 
  $(function() {
    $('.scroll-down').click(function() {
      $('html, body').animate({ scrollTop: $('section.about').offset().top }, 1000);
      return false;
    });
  });

  //Animated title to left 
  $('.title__animate--bounceInLeft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100,
    repeat: true,
  });

  //Animated title to right 
  $('.title__animate--bounceInRight').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100,
    repeat: true,
  });

  //Back to top
  if ($('#button-up').length) {
    let scrollTrigger = 300, // px
      backToTop = function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#button-up').addClass('is-visible');
        } else {
          $('#button-up').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('#button-up').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  }

  //Slow scroll from menu-item to current section
  $(".nav__item-name").on("click", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

  // Tabs for section About
  $('[data-tab-nav]').on('click', function() {
    let that = $(this),
      tabs = $('.about__tab-content > div');
    $('.about__tab-menu li').removeClass('active');
    $(that).addClass('active');
    $(tabs).removeClass('active');
    $('[' + $(that).attr("data-tab-nav") + ']').addClass('active');
  });

  // Animated numbers for section Achievements
  function archnumerator() {
    $('.number1').numerator({
      easing: 'linear',
      duration: 2000,
      delimiter: ',',
      rounding: 0,
      toValue: 10,
    })

    $('.number2').numerator({
      easing: 'linear',
      duration: 3000,
      delimiter: ',',
      rounding: 0,
      toValue: 400,
    })

    $('.number3').numerator({
      easing: 'linear',
      duration: 4000,
      delimiter: ',',
      rounding: 0,
      toValue: 312,
    })
    $('.number4').numerator({
      easing: 'linear',
      duration: 5000,
      delimiter: ',',
      rounding: 0,
      toValue: 480,
    })
  };

  archnumerator();

  // Filterizr for section Portfolio
  $(function() {
    $('.portfolio__nav li').click(function() {
      $('.portfolio__nav li').removeClass('active');
      $(this).addClass('active');
    });

    $('.portfolio__grid').filterizr();
  });

  // Slimscroll for section Team
  $(function() {
    $('#inner-content-div1').slimScroll({
      width: '430px',
      height: '304px',
      size: '4px',
      color: '#196fc0',
      alwaysVisible: true,
    });

    $('#inner-content-div2').slimScroll({
      width: '430px',
      height: '304px',
      size: '4px',
      color: '#196fc0',
      alwaysVisible: true,
    });

    $('#inner-content-div3').slimScroll({
      width: '430px',
      height: '304px',
      size: '4px',
      color: '#196fc0',
      alwaysVisible: true,
    });

    $('#inner-content-div4').slimScroll({
      width: '430px',
      height: '304px',
      size: '4px',
      color: '#196fc0',
      alwaysVisible: true,
    });

  });

  // Slider team section
  $('#team__slider').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="team__slider-btn team__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="team__slider-btn team__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    // fade: true,
  });

  // Slider testimonials section
  $('#testimonials__slider').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
  });

  //SCROLL DOWN BUTTOM TO SECTION CONTACT US
  $(function() {
    $('.already__item-btn').click(function() {
      $('html, body').animate({ scrollTop: $('section.contact').offset().top }, 1000);
      return false;
    });
  });

  // LOCATE BUTTON
  $("#locate__btn").click(function() {
    $(".locate__map-wrapper").toggleClass("locate__map-wrapper--visible");
  });

  // INPUTS EVENTS
  $(".contact__input-field").focus(function() {
    $(this).parent(".contact__input").addClass("contact__input--filled");
  });
  $(".contact__input-field").blur(function() {
    if ($(this).val() === "") {
      $(this).parent(".contact__input").removeClass("contact__input--filled");
    }
  });

  $("#contact__form").validate({

    rules: {
      form_name: {
        required: true,
        minlength: 2,

      },
      form_email: {
        required: true,
        email: true,

      },
      form_mobile: {
        required: true,
        digits: true,
      },
    },
    messages: {
      form_name: {
        required: "Поле Имя обязательное для заполнения",
        minlength: "Имя должно состоять из 2-х и более букв",
      },
      form_email: {
        required: "Поле E-mail обязательное для заполнения",
        email: "Введите пожалуйста корректный E-mail",
      },
    },
    focusCleanup: true,
    focusInvalid: false,
    errorClass: "contact__input-field--invalid",
  });

});