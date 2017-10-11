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
        // fade: true,
    });

    // Set active element in color
    $('.nav__item-name').click(function(e) {
        e.preventDefault();
        $('.nav__item-name').removeClass('nav__item-name--active');
        $(this).addClass('nav__item-name--active');
    });

    //Scroll down button 
    $(function() {
        $('.scroll-down').click(function() {
            $('html, body').animate({ scrollTop: $('section.about').offset().top }, 1000);
            return false;
        });
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
    $(function() {
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
    });
    // // Masonry grid for section Portfolio
    // let $container = $('.portfolio__grid');
    // $container.imagesLoaded(function() {
    //     $container.masonry({
    //         itemSelector: '.portfolio__grid-item',
    //         columnWidth: '.portfolio__grid-sizer',
    //         percentPosition: true,
    //         // gutter: '.portfolio__gutter-sizer',
    //     });
    // });

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
        // prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
        // nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="ion-chevron-right"></span></button>',
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 4000,
        // fade: true,
    });


});