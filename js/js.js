// hide show

var open = document.querySelector('.knopopen');
var tijdlijn = document.querySelector('.group');

var animate = function () {
	open.classList.toggle('knopopendicht');
	tijdlijn.classList.toggle('lijn');
}

open.addEventListener('click', animate);
