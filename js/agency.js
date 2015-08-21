/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var $window = $(window);
var aboutEventTrigger = false;
var xpEventTrigger = false;
var xpItemTrigger = false;
var portfolioEventTrigger = false;
var contactEventTrigger = false;


$(document).ready(function() {
    $(".navbar-brand").hide();
    $(".contactForm").hide();

    console.log("HELLO");

    var winHeight = Number($window.height()) + 50;
    console.log(winHeight);
    $("header").css("height", winHeight);

    $window.resize(function() {
        var winHeight = Number($window.height()) + 50;
        console.log(winHeight);
        $("header").css("height", winHeight);
    });

    $window.scroll(function(){

        if(($("#about").offset().top - $window.scrollTop()) < ($window.height() *.65) && aboutEventTrigger == false){
            aboutEventTrigger = true;
            console.log("ABOUT EVENT TRIGGERED");
            $("#about .underline").css({
                'transform': 'translateX(-50%) scale3d(1, 1, 1)'
            });
            $("#about .section-heading span").fadeIn();
            $("#about .section-heading span").animate({
                opacity: 1,
                top: '-30%'
            });
        }

        if(($("#services").offset().top - $window.scrollTop()) < ($window.height() *.65) && xpEventTrigger == false){
            xpEventTrigger = true;
            console.log("EXPERIENCE EVENT TRIGGERED");
            $("#services .underline").css({
                'transform': 'translateX(-50%) scale3d(1, 1, 1)'
            });
            $("#services .section-heading span").fadeIn();
            $("#services .section-heading span").animate({
                opacity: 1,
                top: '-30%'
            });
        }

        if(($("#services").offset().top - $window.scrollTop()) < ($window.height() *.35) && xpItemTrigger == false){
            xpItemTrigger = true;
            $(".xpItem").animate({
                "opacity": 1,
                'margin-top': '0px'
            });
        }

        if(($("#portfolio").offset().top - $window.scrollTop()) < ($window.height() *.65) && portfolioEventTrigger == false){
            portfolioEventTrigger = true;
            console.log("PORTFOLIO EVENT TRIGGERED");
            $("#portfolio .underline").css({
                'transform': 'translateX(-50%) scale3d(1, 1, 1)'
            });
            $("#portfolio .section-heading span").fadeIn();
            $("#portfolio .section-heading span").animate({
                opacity: 1,
                top: '-30%'
            });
        }

        if(($("#contact").offset().top - $window.scrollTop()) < ($window.height() *.65) && contactEventTrigger == false){
            contactEventTrigger = true;
            console.log("CONTACT EVENT TRIGGERED");
        }
    });

    $(".emailMe").click(function(){
       $(".contactForm").slideToggle();
        var cfOffset = $(".contactForm").offset().top - 200;
        console.log(cfOffset);
        $('html, body').stop().animate({
            scrollTop: cfOffset
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".xIcon").click(function(){
        $(".contactForm").slideToggle();
    });

    $(".portfolio-item").hover(
        function(){
            console.log("MOUSE IN");
            $(this).find("a img").stop().animate({
                width: "140px"
            });
        },
        function(){
            console.log("MOUSE OUT");
            $(this).find("a img").stop().animate({
                width:"130px"
            });
    });

});