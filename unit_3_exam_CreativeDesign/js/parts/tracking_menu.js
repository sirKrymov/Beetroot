// Active tracking menu
$(document).ready(function() {
  $(document).on("scroll", onScroll);

  // smoothscroll
  // $('a[href^="#"]').on('click', function(e) {
  //   e.preventDefault();
  //   $(document).off("scroll");

  //   $('a').each(function() {
  //     $(this).removeClass('nav__item-name--active');
  //   })
  //   $(this).addClass('nav__item-name--active');

  //   var target = this.hash,
  //     menu = target;
  //   $target = $(target);
  //   $('html, body').stop().animate({
  //     'scrollTop': $target.offset().top + 2
  //   }, 800, 'swing', function() {
  //     window.location.hash = target;
  //     $(document).on("scroll", onScroll);
  //   });
  // });
});

function onScroll(event) {
  let scrollPos = $(document).scrollTop();
  $('.nav__item-name').each(function() {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav__item-name').removeClass("nav__item-name--active");
      currLink.addClass("nav__item-name--active");
    } else {
      currLink.removeClass("nav__item-name--active");
    }
  });
}