/*
var nombre = prompt("¿Cuál es tu nombre?");
var marca = prompt("¿Cuál es la marca de tu auto?","Ejemplo: Fiat");
var modelo = prompt("¿Qué modelo es de tu auto?","Ejemplo: Mobi");
var km = prompt("¿Cuántos kilometros tiene tu auto?");
var anio = prompt("¿Desde qué año tenés tu auto?");
*/
/*
	var respuesta = confirm("¿Quieres ver nuestras promociones?");
	//console.log("respuesta vale:"+respuesta);
	if (respuesta) {
		cajaPromo = document.getElementById('datos_cliente');
		cajaPromo.style.display  = "block";
	}
*/
	var carrusel = new Array ("imagenes/bluemax1.jpg","imagenes/bluemax2.jpg","imagenes/bluemax3.jpg")

	var posicion = 0; 

	var imagenActiva = document.getElementById('imagenes');

	//imagenActiva.style.backgroundImage='url('+carrusel[posicion]+')';
	imagenActiva.innerHTML='<img src="'+carrusel[posicion]+'" />'; 

	function retrocede (){
		if (posicion==0) {
			posicion=2;
		} else {
			posicion--;
		}
	//	imagenActiva.style.backgroundImage='url('+carrusel[posicion]+')';
	imagenActiva.innerHTML='<img src="'+carrusel[posicion]+'" />';
	}

	function avanza (){
		if (posicion==2) {
			posicion=0;
		} else {
			posicion++;
		}
	//	imagenActiva.style.backgroundImage='url('+carrusel[posicion]+')';
	imagenActiva.innerHTML='<img src="'+carrusel[posicion]+'" />';
	}

