$(document).ready(function () {

	AOS.init();


	/** Parallax effect */
	var rellax = new Rellax('.rellax');

	/** Scroll Magic */
	var controller = new ScrollMagic.Controller();

	var revealElements = document.getElementsByClassName("dv-block-line");
	for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
			triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
			offset: 150,												 // start a little later
			triggerHook: 0.9,
			duration: "100%"

		})
			.setClassToggle(revealElements[i], "visible") // add class toggle
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}

	var revealElements = document.getElementsByClassName("dv-clr-block");
	for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
			triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
			offset: -200,												 // start a little later
			triggerHook: 0.9,
		})
			.setClassToggle(revealElements[i], "reveal") // add class toggle
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}

	(function ($) {

		// scroll functions
		$(window).scroll(function (e) {

			// add/remove class to navbar when scrolling to hide/show
			var scroll = $(window).scrollTop();
			if (scroll >= 150) {
				$('.navbar').addClass("navbar-hide");
			} else {
				$('.navbar').removeClass("navbar-hide");
			}

		});

		var divs = $('div[id^="content-"]').hide(),
			i = 0;
		var lastdiv = divs.last();

		(function cycle() {

			divs.eq(i).fadeIn(400)
				.css({ position: 'relative' })
				.css({
					transition: 'opacity 1s ease-in-out'
				}
				)
				.delay(1000)
				.fadeOut(400, cycle)
				.css({ "animation": "keylinesCycle 2s 1" });

			i = ++i % divs.length;

		})();
	})(jQuery);

});


