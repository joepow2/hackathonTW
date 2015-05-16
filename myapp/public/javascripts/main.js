$(function(){
 	$('body').scrollspy({ target: '#navbar'});
 	
 	$(‘#navbar a’).on(‘click’, function(){ 
 		$(‘html, body’).animate({
			scrollTop: $($(this).attr(‘href’)).offset().top 
		}, 500);
		return false;
	});
});