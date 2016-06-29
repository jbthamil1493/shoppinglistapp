$(document).ready(function() {
	$('#addItem').click(function() {
  		$('ul').append('<li class="currentItem"><img class="checked" src= "images/checkmark.png">' + " " + '<img class="trash" src="images/trashcan.png"></li>');
	});
	$('ul').on('click', '.trash', function(event) {
		console.log('trash clicked');
		$(this).parent().remove();
	});
	$('ul').on('click', '.checked', function(event) {
		$(this).parent().toggleClass('linethrough');
		console.log('check clicked');
	});
});