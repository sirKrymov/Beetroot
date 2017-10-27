$(document).ready(function() {

    //Slow scroll from menu-item to current section
    $(".nav__item-name").on("click", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 700);
    });

    // Set active element in color
    $('.nav__item-name').click(function(e) {
        e.preventDefault();
        $('.nav__item-name').removeClass('nav__item-name--active');
        $(this).addClass('nav__item-name--active');
    });

    // Slider main section
    $('#main-screen__slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        // prevArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        // nextArrow: '<button type="button" class="main-screen__slider-btn main-screen__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
    });

    //Scroll down button to section Contact from Main-screen
    $(function() {
        $('.main-screen__btn--contact').click(function() {
            $('html, body').animate({ scrollTop: $('section.contact').offset().top }, 1000);
            return false;
        });
    });

    //Scroll down button to section features from about
    $(function() {
        $('#about__btn-moreinfo').click(function() {
            $('html, body').animate({ scrollTop: $('section.features').offset().top }, 1000);
            return false;
        });
    });

    //Scroll down button to section Pricing from Responsive
    $(function() {
        $('#responsive__btnToPricing').click(function() {
            $('html, body').animate({ scrollTop: $('section.pricing').offset().top }, 1000);
            return false;
        });
    });

    //Scroll down button to section Pricing from Impressed
    $(function() {
        $('#impressed__btnToPricing').click(function() {
            $('html, body').animate({ scrollTop: $('section.pricing').offset().top }, 1000);
            return false;
        });
    });

    // Filterizr for section Portfolio
    $(function() {
        $('.portfolio__nav li').click(function() {
            $('.portfolio__nav li').removeClass('active');
            $(this).addClass('active');
        });

        $('.portfolio__grid').filterizr();
    });

    $('#expert__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#expert__slider-nav'

    });
    $('#expert__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#expert__slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="expert__slider-btn expert__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        centerPadding: '100px',
    });


    // Inputs events
    $(".contact__input-field").focus(function() {
        $(this).parent(".contact__input").addClass("contact__input--filled");
    });
    $(".contact__input-field").blur(function() {
        if ($(this).val() === "") {
            $(this).parent(".contact__input").removeClass("contact__input--filled");
        }
    });

    // Contact form validate
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