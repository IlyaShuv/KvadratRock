function scrollAnimate() {
	$(window).scroll(function() {
	$('.mov').each(function() {
		var contentPos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (contentPos < topOfWindow+700) {
			$(this).addClass('animated');
			$(this).removeClass('hidden');
		}
	});
});
}