alert('Hola desde prueba');
document.getElementById('sensor').innerHTML='Hola';
function LED1_On(){
	document.getElementById('sensor').innerHTML='Led On';
	console.log('Se presiono el boton 1')
}
function LED1_Off(){
	document.getElementById('sensor').innerHTML='Led Off';
	console.log('Se presiono el boton 2')
}