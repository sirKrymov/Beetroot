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

});