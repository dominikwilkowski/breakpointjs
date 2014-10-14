// LISTENING TO BUTTON CLICK
$(function() {

	$('.js-check').on('click', function() {
		var $check = getScreenLayout();
		var $breakpoints = ['no css support', 'XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL'];

		alert( 'Breakpoint: ' + $breakpoints[ $check ] );
	});

});