// ADD THE LISTENING DIV
$(function() {

	$('<div/>') //add element to body to be styled with CSS
		.addClass('temp-responsivejs js-responsivejs')
		.appendTo('body');

});



// GET THE CURRENT BREAKPOINT
function getScreenLayout() {

	var $currentLayout = parseInt( $('.js-responsivejs').css('width') ); //get CSS width and parse as integer

	return $currentLayout || -1;

}