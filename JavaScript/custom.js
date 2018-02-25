// JavaScript Document
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

$(window).scroll(function(){
	"use strict";
	$("#karateHeader").css("opacity", 1 - $(window).scrollTop() / 350);
});

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