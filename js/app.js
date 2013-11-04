/* Horizontal Accordion */
$.fn.horizontalAccordion = function(speed) {
	return this.each(function() {
		var $accordionHeaders = $(this).find('h1'),
				$open = $accordionHeaders.next().filter(':first'),
				width = $open.outerWidth();

		$accordionHeaders.next().filter(':not(:first)').css({visibility: 'visible', width: 0});
		$accordionHeaders.filter(':first').css({background: "#3366FF"});
	
		$accordionHeaders.click(function() {
			$open.animate({width: 0}, {duration: speed});
			$open.prev().css({background: "#3399FF"});
			$open = $(this).next().css({visibility: 'visible'}).animate({width: width}, {duration: speed});
			$(this).css({background: "#3366FF"});
			return;
		});
	});
}

$(document).ready(function() {
	// Drag and Drop
	$("#sortable").sortable();

	// Horizontal Accordion
	$("#accordion").horizontalAccordion(100);

	// Animation One
	var $flip = $("#switch");
	var isOn = true;

	$flip.click(function() {
		if(isOn) {
			$(this).animate({left: "0px"}, 50);
			isOn = false;
		} else {
			$(this).animate({left: "58px"}, 50);
			isOn = true;
		}
	});

	// Animation Two
	var $marker = $("#marker"),
			width = 77;

	$(document).on("keydown", function(event) {
		if(event.which == 39) {
			if(width < 752) width += 75;
		} else if(event.which == 37) { 
			if(width > 2) width -= 75;
		}
		$marker.animate({width: width}, 75);
	});

	// Progress Bar
	var $increase = $("#increase"),
			$decrease = $("#decrease"),
			$percentage = $("#percentage"),
			$bar = $("#bar"),
			percent = 0;

	$increase.click(function() {
		if(percent < 100) percent++;
		$percentage.html(percent + "%");
		$bar.animate({width: percent * 6}, 75);
	});

	$decrease.click(function() {
		if(percent > 0) percent--;
		$percentage.html(percent + "%");
		$bar.animate({width: percent * 6}, 75);
	});
});