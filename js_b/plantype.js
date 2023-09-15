$(function() {
	$('.listBtn').slick({
		slidesToShow: 2,
		dots: false,
		arrows: false,
		draggable: false,
		focusOnSelect: true,
		asNavFor: '.slider-map',
	});

	$('.slider-map').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: false,
		draggable: false,
		asNavFor: '.listBtn'
	});
});