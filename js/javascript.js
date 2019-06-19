// background


$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 1300) {
		$("body").addClass("changeColor");
	}
	if (scroll >= 2050) {
		$("body").addClass("changeColor1");
	}
	if (scroll >= 2800) {
		$("body").addClass("changeColor2");
	}
	if (scroll >= 3550) {
		$("body").addClass("changeColor3");
	}
	if (scroll >= 4300) {
		$("body").addClass("changeColor4");
	}
	if (scroll >= 5050) {
		$("body").addClass("changeColor5");
	}
	if (scroll >= 5800) {
		$("body").addClass("changeColor6");
	}
	if (scroll >= 6550) {
		$("body").addClass("changeColor7");
	}
	if (scroll >= 7300) {
		$("body").addClass("changeColor8");
	}
	if (scroll >= 8050) {
		$("body").addClass("changeColor9");
	}
	if (scroll >= 8800) {
		$("body").addClass("changeColor10");
	}
	if (scroll <= 1300) {
		$("body").removeClass("changeColor");
	}
	if (scroll <= 2050) {
		$("body").removeClass("changeColor1");
	}
	if (scroll <= 2800) {
		$("body").removeClass("changeColor2");
	}
	if (scroll <= 3550) {
		$("body").removeClass("changeColor3");
	}
	if (scroll <= 4300) {
		$("body").removeClass("changeColor4");
	}
	if (scroll <= 5050) {
		$("body").removeClass("changeColor5");
	}
	if (scroll <= 5800) {
		$("body").removeClass("changeColor6");
	}
	if (scroll <= 6550) {
		$("body").removeClass("changeColor7");
	}
	if (scroll <= 7300) {
		$("body").removeClass("changeColor8");
	}
	if (scroll <= 8050) {
		$("body").removeClass("changeColor9");
	}
	if (scroll <= 8800) {
		$("body").removeClass("changeColor10");
	}

});


//bron voor jquery 
//https://codepen.io/Paulie-D/pen/rjJcB


// Scrollbalk
window.onscroll = function () {
	myFunction()
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}


// Gebruik van AOS animaties voor tekst
AOS.init();
