$(document).ready(function() {

    //Fixed sticky menu
    let menu = $(".header");
    fixed_menu = "header--fixed";
    // let menu_btn = $(".nav__btn");
    // fixed_menu_btn = "nav__btn--fixed";

    menuPos = menu.offset().top;

    $(window).scroll(function() {
        if ($(this).scrollTop() > menuPos) {
            menu.addClass(fixed_menu);
            // menu_btn.addClass(fixed_menu_btn);
        } else {
            menu.removeClass(fixed_menu);
            // menu_btn.removeClass(fixed_menu_btn);
        }
    });
});