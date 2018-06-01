	var ALTO_LETRA = 20, ALTO = 1000, ANCHO = 2000, cv, cx, cadenas = [];
	function limpiarPantalla() {
		cx.fillStyle = '#000';
		cx.fillRect(0,0,ANCHO,ALTO);}
	function dibujarCadena(cadena) {
		cx.fillStyle = 'rgb(0,'+cadena.verde+',0)';
		for(i in cadena.cadena) {
		cx.fillText(cadena.cadena[i], cadena.x, cadena.y+(i*ALTO_LETRA));}}
	function iniciarCadena(cadena){
		cadena.cadena = [];
		for(var i = 0; i<10; i++){	
		cadena.cadena.push(String.fromCharCode(Math.round(Math.random()*26)+65)); }
		cadena.alto = cadena.cadena.length*ALTO_LETRA;
		cadena.x = Math.random()*ANCHO;
		cadena.y = -cadena.alto;
		cadena.velocidad = Math.random() * 10;
		cadena.verde = Math.round(Math.random()*255);}
	function tiempo(){
		limpiarPantalla();
		for(var i = 0; i < cadenas.length; i++) {
		cadenas[i].y += cadenas[i].velocidad;
		if(cadenas[i].y > ALTO) {
		iniciarCadena(cadenas[i]);}
		dibujarCadena(cadenas[i]);}
		setTimeout(tiempo, 25);}
	window.onload = function() {
		cv = document.getElementById('lienzo');
		cx = cv.getContext('2d');
		for(var i = 0 ; i < 350; i++ ) {
		var cad={};
		iniciarCadena(cad);
		cadenas.push(cad); }
		tiempo();};