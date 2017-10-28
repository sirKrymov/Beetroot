$(document).ready(function() {
	
	//back to top
	if ($('#button__page-up').length) {
		let scrollTrigger = 300, // px
			backToTop = function () {
				let scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#button__page-up').addClass('is-visible');
				} else {
					$('#button__page-up').removeClass('is-visible');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#button__page-up').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1000);
		});
	}
	
	
});