$( function() {

	var buttonBlue = true;
	var buttonColor

	$('button').css('background', 'yellow')
	$('button').click(function(){
		$(this).css('background', buttonBlue ? 'blue' : 'red')
		buttonBlue = !buttonBlue
	})

	$('button').hover(function() {
		buttonColor = $(this).css('background')
		$(this).css('background', 'green')
	}, function() {
		$(this).css('background', buttonColor)
	})
} );