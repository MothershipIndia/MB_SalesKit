$(function () {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({
      bottom: activeState ? "100%" : "-1000%"
    }, 400);
  }
  $("#menu-wrapper").click(function (event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function () {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
}); // jQuery load



//page border animation
$(function () {
  $(".presence_btn, .residence_btn, .amenities_btn, .surroundings_btn, .home_btn").click(function (event) {
    $(".left").toggleClass("anim_left");
    $(".right").toggleClass("anim_right");
    $(".top").toggleClass("anim_top");
    $(".bottom").toggleClass("anim_bottom");

    $(".center_container").toggleClass("hidden");
    $(".presence_btn").toggleClass("no_pointer");
    $(".home_btn").toggleClass("hidden");
  });
});



//onboarding Page
$(function () {
  $("#explore_btn").click(function (event) {
      $(".onboarding").toggleClass("active");
    $('.menu_bar').css('z-index', '5');
  });
});


//presence Page
$(function () {
  $(".presence_btn").click(function (event) {
    $(".presence").fadeIn(1000);
  });
});


//residence Page
$(function () {
  $(".residence_btn").click(function (event) {
    $(".residence").fadeIn(1000);
  });
});


//amenities Page
$(function () {
  $(".amenities_btn").click(function (event) {
    $(".amenities").fadeIn(1000);
  });
});


//surroundings Page
$(function () {
  $(".surroundings_btn").click(function (event) {
    $(".surroundings").fadeIn(1000);
  });
});


//home button
$(function () {
  $(".home_btn").click(function (event) {
    $(".presence").fadeOut(1000);
    $(".residence").fadeOut(1000);
    $(".amenities").fadeOut(1000);
    $(".surroundings").fadeOut(1000);
  });
});



//Fullscreen button
var element = document.querySelector("body");
/* Get into full screen */
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
	
	// If no element is in full-screen
	if(full_screen_element === null)
		return false;
	else
		return true;
}

$("#go-button").on('click', function() {
	if(IsFullScreenCurrently())
		GoOutFullscreen();
	else
		GoInFullscreen($("body").get(0));
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
	if(IsFullScreenCurrently()) {
		// $("body span").text('Full Screen Mode Enabled');
		$("#go-button").text('FullScr');
	}
	else {
		// $("body span").text('Full Screen Mode Disabled');
		$("#go-button").text('FullScr');
	}
});


$('#media-video').on('ended', function () {
  this.load();
  this.play();
});