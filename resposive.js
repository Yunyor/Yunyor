$(document).ready(main);

var contador = 0;
var bandera =0;
function main () {
	$('nav').animate({
		left: '-100%'
	});
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	

}