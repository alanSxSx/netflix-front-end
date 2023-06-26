console.log('Testando')

let menu = document.getElementById('navigator')


window.addEventListener('scroll', function(event) {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop > 1) {
		menu.style.background = "rgba(20,20,20)"
		menu.style.transition = "background-color 0.7s ease"
		console.log(scrollTop)

	} else {
		menu.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)'
		menu.style.transition = "background-color 0.7s ease"
	}
});
