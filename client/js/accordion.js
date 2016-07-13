$(function(){		
		enterFunction = function(){
			$(this).html('ACTIVE');
		}
		leaveFunction = function(){
			$(this).html('inactive');
		}
		$('.accordion').hSlides({
			totalWidth: 611, 
			totalHeight: 345, 
			minPanelWidth: 55, 
			maxPanelWidth: 400,
			activeClass: 'active',
			speed: 500
		});			
	}
);