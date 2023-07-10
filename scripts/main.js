console.log('Testando')

let menu = document.getElementById('navigator')
let menul = document.getElementById('menuleft')




window.addEventListener('scroll', function(event) {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var larguraTela = window.innerWidth;
	if (scrollTop > 1 && larguraTela > 768) {
		menu.style.background = "rgba(20,20,20)"
		menu.style.transition = "background-color 0.7s ease"

	} else {
		menu.style.background = 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)'
		menu.style.transition = "background-color 0.7s ease"
	}
});

window.addEventListener('resize', function(event) {
	var menu = document.getElementById('menuleft');
	var larguraTela = window.innerWidth;
	if(larguraTela > 768){
		menu.style.display = 'flex'
		menu.style.opacity = 1
	} else {

	}
	
  });



// document.addEventListener('DOMContentLoaded', function() {
// 	var btnMenu = document.getElementById('btn-menu');
// 	var menu = document.getElementById('menuleft');
  
// 	btnMenu.addEventListener('click', function() { 
// 	  menu.classList.toggle('active');
	  
// 	});
//   });




document.addEventListener('DOMContentLoaded', function() {
	var btnMenu = document.getElementById('btn-menu');
	var menu = document.getElementById('menuleft');
	var larguraTela = window.innerWidth;

	if (larguraTela > 768) {
		menu.style.display = 'flex';
		menu.style.opacity = '1';
		console.log(larguraTela)
	} else {

	}

	
	btnMenu.addEventListener('click', function() {
	  menu.classList.toggle('active');
  
	  if (menu.classList.contains('active')) {
		menu.style.display = 'flex';
		setTimeout(function() {
		  menu.style.opacity = '1';
		}, 15);
	  } else {
		menu.style.opacity = '0';
		setTimeout(function() {
		  menu.style.display = 'none';		  		  
		}, 300);
	  }
	});


  });
   








