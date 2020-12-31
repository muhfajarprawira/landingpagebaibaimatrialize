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

// Class Active
// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length
// for (let i = 0; i < menuLength; i++) {
// 	if (menuItem[i].href === currentLocation) {
// 		menuItem[i].className = "active"
// 	}
// }


// SCROLL SECTIONS ACTIVE LINK
// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', scrollActive)

// function scrollActive() {
// 	const scrollY = window.pageYOffset

// 	sections.forEach(current => {
// 		const sectionHeight = current.offsetHeight
// 		const sectionTop = current.offsetTop - 50
// 		sectionId = current.getAttribute('id')

// 		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
// 			document.querySelector('a[href*=' + sectionId + ']').classList.add('active')
// 		} else {
// 			document.querySelector('a[href*=' + sectionId + ']').classList.remove('active')
// 		}
// 	})
// }

// Active On Click
let buttons = document.querySelectorAll('ul li .a')

buttons.forEach(button => {
	buttons.addEventListener('click', function () {
		buttons.forEach(btn => btn.classList.remove('active'));
		this.classList.add('active');


	})
})


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