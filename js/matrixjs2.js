	var ALTO_LETRA = 20, ALTO = 1000, ANCHO = 1350, cv, cx, cadenas = [];
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

function iniciar(){   
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
	
    lienzo.beginPath();   
	lienzo.strokeStyle="#8800ff";
    lienzo.moveTo(100,1400);   
    lienzo.lineTo(100,1300);   
    lienzo.lineTo(200,1300);   
    lienzo.lineTo(200,1350);
    lienzo.lineTo(150,1350);
    lienzo.lineTo(200,1400);
    lienzo.lineTo(310,1400);
    lienzo.lineTo(210,1300);
    lienzo.lineTo(260,1350);
    lienzo.lineTo(310,1300);
    lienzo.lineTo(260,1350);
    lienzo.lineTo(310,1400);
    lienzo.lineTo(320,1400);
    lienzo.lineTo(320,1300);
    lienzo.lineTo(420,1300);
    lienzo.lineTo(320,1300);
    lienzo.lineTo(320,1300);
    lienzo.lineTo(320,1400);
    lienzo.lineTo(420,1400);
    lienzo.lineTo(420,1350);
    lienzo.lineTo(370,1350);
    lienzo.lineTo(420,1350);
    lienzo.lineTo(420,1400);
    lienzo.lineTo(430,1400);
    lienzo.lineTo(480,1300);
    lienzo.lineTo(505,1350);
    lienzo.lineTo(455,1350);
    lienzo.lineTo(505,1350);
    lienzo.lineTo(530,1400);
    lienzo.lineTo(540,1400);
    lienzo.lineTo(540,1300);
    lienzo.lineTo(640,1400);
    lienzo.lineTo(640,1300);
    lienzo.stroke();
	
	
	var gradiente=lienzo.createLinearGradient(0,1750,500,1750);
	gradiente.addColorStop(.33,"rgba(128,0,255,1)");
	gradiente.addColorStop(.67,"rgba(0,255,0,1)");
	lienzo.fillStyle=gradiente;
	lienzo.fillRect(0,1500,500,500);
	
	lienzo.clearRect(100,1700,300,100);
	
	lienzo.strokeStyle="rgba(0,255,0,1)";
	lienzo.strokeRect(600,1500,100,100);
	lienzo.fillStyle="rgba(128,128,255,1)";
	lienzo.fillRect(710,1500,100,100);
	lienzo.clearRect(120,10,80,80);
	
	
	lienzo.beginPath();
	lienzo.moveTo(600,1610);
	lienzo.lineTo(700,1710);
	lienzo.lineTo(600,1710);
	lienzo.fill();
	lienzo.stroke();
	
	
	lienzo.beginPath();
	lienzo.moveTo(710,1610);
	lienzo.lineTo(810,1710);
	lienzo.lineTo(710,1710);
	lienzo.closePath();
	lienzo.stroke();
	
	
	lienzo.beginPath();
	lienzo.arc(650,1770,50,Math.PI*0,Math.PI*2,false);
	lienzo.moveTo(710,1720);   
	lienzo.quadraticCurveTo(750,1770,710,1820);   
	lienzo.moveTo(750,1720);   
	lienzo.bezierCurveTo(800,1770, 700, 1870, 750,1920);   
	lienzo.stroke(); 
	
	
	
	lienzo.lineCap="round";
	lienzo.lineWidth=10;
	lienzo.beginPath();
	lienzo.moveTo(800,1720);
	lienzo.lineTo(800,1820);
	lienzo.stroke();
	/*
	lienzo.lineWidth=1;
	lienzo.shadowColor="rgba(128,0,255,1)";
	lienzo.shadowOffsetX=10;
	lienzo.shadowOffsetY=10;
	lienzo.shadowBlur=10;
	
	lienzo.font="bold 50px cursive";
	lienzo.textAlign="start";   
	lienzo.strokeText("Mi MeNsAjE",700,1300,300);
	*/
	/*
	lienzo..translate(50,50);   
	lienzo..rotate(Math.PI*.2);
	lienzo..scale(2,2);
	lienzo..font="bold 50px cursive";
	lienzo..textAlign="start";   
	lienzo.strokeText("Mi MeNsAjE",100,100,120);
	*/
	/*
	lnz.transform(2,0,0,2,100,100);
	lnz.font="bold 20px verdana, sans-serif";
	lnz.fillText("PRUEBA",50,50);
	lnz.transform(1,.5,.5,1,50,50);
	lnz.font="bold 20px verdana, sans-serif";
	lnz.fillText("PRUEBA",50,50);
	*/
	/*
	lnz.save();   
	lnz.translate(50,70);   
	lnz.font="bold 20px verdana, sans-serif";   
	lnz.fillText("PRUEBA1",0,30);   
	lnz.restore();   
	lnz.fillText("PRUEBA2",0,30); 
	*/
	
	
	
	
	
	 } window.addEventListener("load", iniciar, false); 