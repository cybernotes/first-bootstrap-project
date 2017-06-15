//  var $mainHeader = $('#main-header');
// $mainHeader.html('Hello');
$('#random-gif-btn').click( function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg", function( data ) {
  		var img= '<img src="' + data.data.image_original_url + '">';
  		$('#randam-gif-container').html(img);
  		console.log(data);
  	});
});


