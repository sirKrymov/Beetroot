$(document).ready(function() {

  $('.parallax-window').parallax({imageSrc: '../img/Background.png'});



    $('.about__slider').slick({
      infinite: true,
      speed: 500,
      prevArrow: '<button type="button" class="about__slider-btn about__slider-btn--prev"><span class="ion-ios-arrow-left"></span></button>',
      nextArrow: '<button type="button" class="about__slider-btn about__slider-btn--next"><span class="ion-ios-arrow-right"></span></button>',
      fade: true,
      cssEase: 'linear'
    });








  








  // $(function () {
  //   //Initialize filterizr with default options
  //   $('#filtr-container').filterizr();
  // });
  // $('#team__slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   adaptiveHeight: true,
  //   prevArrow: '<button type="button" class="team__slider-btn team__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
  //   nextArrow: '<button type="button" class="team__slider-btn team__slider-btn--next"><span class="ion-chevron-right"></span></button>',
  //   autoplay: false,
  //   // arrows: false,
  //   autoplaySpeed: 4000,
  //   fade: true,
  // });

  // $('#testimonials__slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   adaptiveHeight: true,
  //   prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
  //   nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="ion-chevron-right"></span></button>',
  //   autoplay: false,
  //   // arrows: false,
  //   autoplaySpeed: 4000,
  //   fade: true,
  // });

  // $(function(){
  //   $('#inner-content-div').slimScroll({
  //       height: '250px',
  //       color: 'green'
  //   });
  // });

  // $(".example").musicPlayer({
  //     playlistItemSelector: 'div',
  //     elements: ['artwork', 'information', 'controls', 'progress', 'time', 'volume'], // ==> This will display in  the order it is inserted
  //     //elements: [ 'controls' , 'information', 'artwork', 'progress', 'time', 'volume' ],
  //     //controlElements: ['backward', 'play', 'forward', 'stop'],
  //     //timeElements: ['current', 'duration'],
  //   //timeSeparator: " : ", // ==> Only used if two elements in timeElements option
  //     //infoElements: [  'title', 'artist' ],  

  //     //volume: 10,
  //     //autoPlay: true,
  //     //loop: true,
  
  //     // onPlay: function() {
  //     //   $('body').css('background', 'black');
  //     // },
  //     // onPause: function() {
  //     //     $('body').css('background', 'green');
  //     // },
  //     // onStop: function() {
  //     //     $('body').css('background', '#141942');
  //     // },
  //     // onFwd: function() {
  //     //     $('body').css('background', 'white');
  //     // },
  //     // onRew: function() {
  //     //     $('body').css('background', 'blue');
  //     // },
  //     // volumeChanged: function() {
  //     //     $('body').css('background', 'red');
  //     // },
  //     // seeked: function() {
  //     //   $('body').css('background', 'orange');
  //     // },
  //     // trackClicked: function() {
  //     //   $('body').css('background', 'brown');
  //     // },
  //     // onMute: function() {
  //     //   $('body').css('background', 'grey');
  //     // },


  // });

  // $(".example2").musicPlayer({
  // //volume: 10,
  // //elements: ['artwork', 'controls', 'progress', 'time', 'volume'],
  // //playerAbovePlaylist: false,
  // onLoad: function() {
  //     //Add Audio player
  //     plElem  = "<div class='pl'></div>";
  //     $('.example2').find('.player').append(plElem);
  //     // show playlist
  //     $('.pl').click(function (e) {
  //         e.preventDefault();

  //         $('.example2').find('.playlist').toggleClass("hidden");
  //     });
  // },

  // });


});

