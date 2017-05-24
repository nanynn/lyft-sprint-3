var contenedor = document.getElementsByClassName('seccion-dos')[0];
var boton = document.getElementById('btn');


boton.addEventListener('click', function(e){

	e.preventDefault();

	var coodernadaX = document.getElementById('xcor').value;
	var coodernadaY = document.getElementById('ycor').value;

	var mensaje = document.createElement('span');
	mensaje.classList.add('mensaje');
	var texto = document.createTextNode("Debe ser un número");
	var textoDos = document.createTextNode("Debes poner un dato");

	contenedor.appendChild(mensaje);
	
	if(coodernadaY == "" && coodernadaX == ""){
		mensaje.appendChild(textoDos);
		return false;
	}
	else if(!/^([0-9])*$/.test(coodernadaY) && !/^([0-9])*$/.test(coodernadaX)){
		mensaje.appendChild(texto);
		return false;
	}else{
		contenedor.removeChild(mensaje);
	}

	var espacio =document.createElement('div');
	espacio.classList.add('cuadrado');
	contenedor.appendChild(espacio);

	var imagen = document.createElement('img');
	imagen.classList.add('autito');
	espacio.appendChild(imagen);

});







