window.sr = ScrollReveal();
// sr.reveal('.cell', {origin: 'right', distance: '200px',});
sr.reveal('.headercontainer',{origin: 'bottom', distance: '50px', scale: 1, duration: 1000, easing: 'cubic-bezier(0.49,-0.02, 0.36, 0.95)'});
sr.reveal('#scrolldown', {delay: 800});

function togglenav(){
	if(!$('nav .hamburger').hasClass('is-active')){
		$('nav ul').css('transform','scale(1)');
		$('nav .hamburger').addClass('is-active');
	} else {
		$('nav ul').css('transform','scale(0)');
		$('nav .hamburger').removeClass('is-active');
	}
}

window.setTimeout(function(){
	$('nav ul').css('transform','scale(1)');
	$('nav .hamburger').addClass('is-active');
},1500);

$('nav .hamburger').click(togglenav);

var sidescroll = document.getElementsByClassName('sidescroll')[0];
var flkty = new Flickity(sidescroll, {
	cellSelector: '.cell',
    cellAlign: 'left',
    contain: true,
    freeScroll: false,
    prevNextButtons: true,
    pageDots: true
});