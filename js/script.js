$(document).ready(function() {
	$('ul').on('click', '.trash', function(event) {
		console.log('trash clicked');
		$(this).closest('li').remove();
	});
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
	});
});