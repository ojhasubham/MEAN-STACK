$(document).ready(function(){			 
	//Set opacity on each span to 0%
	$(".rollover").css({'opacity':'0'});
	$(".gall2-rollover").css({'opacity':'0'});
	$(".gall3-rollover").css({'opacity':'0'});
	$(".gall4-rollover").css({'opacity':'0'});
	$(".video-rollover").css({'opacity':'0'});
 
	$('ul a').hover(
		function() {
			$(this).find('.rollover').stop().fadeTo(500, 0.5);
		},
		function() {
			$(this).find('.rollover').stop().fadeTo(500, 0);
		}
	)
	
	$('ul a').hover(
		function() {
			$(this).find('.gall2-rollover').stop().fadeTo(500, 0.5);
		},
		function() {
			$(this).find('.gall2-rollover').stop().fadeTo(500, 0);
		}
	)
	
	$('ul a').hover(
		function() {
			$(this).find('.gall3-rollover').stop().fadeTo(500, 0.5);
		},
		function() {
			$(this).find('.gall3-rollover').stop().fadeTo(500, 0);
		}
	)
	
	$('ul a').hover(
		function() {
			$(this).find('.gall4-rollover').stop().fadeTo(500, 0.5);
		},
		function() {
			$(this).find('.gall4-rollover').stop().fadeTo(500, 0);
		}
	)
	
	$('ul a').hover(
		function() {
			$(this).find('.video-rollover').stop().fadeTo(500, 0.5);
		},
		function() {
			$(this).find('.video-rollover').stop().fadeTo(500, 0);
		}
	)
 
});	

