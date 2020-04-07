$(document).ready(function () {
	$('.slider__carousel').slick({
		speed: 1000,
		fade: true,
		cssEase: "linear",
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.png"></button>'

	});
});