// JavaScript Document

//  fade footer in on bottom
$(window).scroll(function() {
	"use strict";
   if($(window).scrollTop() + $(window).height() === $(document).height()) {
       $("#educationFooter").fadeIn(200);
   }
	else{
		$("#educationFooter").fadeOut(200);
	}
});

// change bullet in fitness page

$(document).on('scroll', function(){
	"use strict";
	event.preventDefault();
	
	$("html, body").animate({
		scrollTop: $("#fitnessBody").parent().next().find(".wholePage").offset().top
	}, 500);
});

$(document).on('click', 'a[href^="#"]', function (event) {
	"use strict";
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// toggle programming effect on and off
$(function(){
	"use strict";
	$("#effectButton").on('click', function(){
		$("#glitch").toggle();
	});
});

// on the karate page fade the "karate" text in 
$(document).ready(function(){
	"use strict";
	$("#karateHeader").fadeIn(1000);
});

// karate: fade the "Karate" text out
$(window).scroll(function(){
	"use strict";
	$("#karateHeader").css("opacity", 1 - $(window).scrollTop() / 350);
});

// Netflix: fade the netflix menu bar background in
$(document).ready(function(){  
	"use strict";
        $(window).scroll(function(){                          
			$('#menuBar').css("background-color", "rgba(0,0,0,"+ $(window).scrollTop() / 250 + ")");
        });
    });

// loader on Netflix page
$(window).ready(function(){
	"use strict";
	$("#netflixLoader").delay(2000).fadeOut(500);
	$("#netflixWrapper").delay(2000).fadeIn();
});

// preloader for colored images
$.preloadImages = function() {
	"use strict";
	for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", arguments[i]);
  	}
};
$.preloadImages("img/EducationColor.png","img/FitnessColor.png","img/KarateColor.png","img/NetflixColor.png","img/ProgrammingColor.png");