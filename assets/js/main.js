var contenedor = document.getElementsByClassName('seccion-dos')[0];
var boton = document.getElementById('btn');
/* en esta parte se llama a la sección para que contenga la información del tablero y al 
boton para que active las funcionalidades dinamicamente*/


boton.addEventListener('click', function(e){

	e.preventDefault(); //ayuda a que la pagina no se comporte de manera erratica


	var coodernadaX = document.getElementById('xcor').value;
	var coodernadaY = document.getElementById('ycor').value;
	/*permite que pueda guardar los datos ingresados en los inputs*/

	var mensaje = document.createElement('span');
	mensaje.classList.add('mensaje');
	var texto = document.createTextNode("Debe ser un número");
	var textoDos = document.createTextNode("Debes poner un dato");
	/*se crea un span que contiene la información del mensaje de error*/
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
	/*validación de los campos del input para que no pase a la siguiente etapa
	si no entrega datos correctos, funciona como puerta de entrada*/
	var espacio =document.createElement('div');
	espacio.classList.add('cuadrado');
	contenedor.appendChild(espacio);
	/*espacio que se crea cuando apreto el botón luego de ingresar datos correctos*/

	var imagen = document.createElement('img');
	imagen.classList.add('autito');
	espacio.appendChild(imagen);
	/*aparece el autito en el tablero, no en la coordenada correcta pero
	para que se ejemplifique que debí hacer*/

});

/*No logre finalmente hacer funcionar la snake de manera funcional*/






