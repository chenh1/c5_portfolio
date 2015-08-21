/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			$(".navbar-brand").fadeIn();
			//$(".headerOption").animate({"margin-left": "30%"}, 600, "swing")

				$(".navbar-nav").removeClass("navbar-center");
				$(".navbar-nav").addClass("navbar-right");


		}
		else {
			classie.remove( header, 'navbar-shrink' );
			$(".navbar-brand").hide();
			$(".navbar-nav").removeClass("navbar-right");
			$(".navbar-nav").addClass("navbar-center");
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();