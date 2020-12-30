// Sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 500,
	transition: 600,
	interval: 3000
});

// Parralax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
	scrollOffset: 50
});