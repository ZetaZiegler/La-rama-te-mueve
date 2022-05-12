// JavaScript Document
		
	
	function comenzar (){
		
		var elemento=document.getElementById("ojo");
		ojo=elemento.getContext("2d");
		
		window.addEventListener("mousemove",animacion,false);
		
	}
	
	function animacion (e){
		
		ojo.clearRect(0,0,56,56);
		
		var xdelraton=e.clientX;
		
		var ydelraton=e.clientY;
		
		var xcentro=28;
		
		var ycentro=28;
		
		var angulo=Math.atan2 (xdelraton-xcentro,ydelraton-ycentro);
		
		var x=xcentro+Math.round(Math.sin(angulo)*10);
		
		var y=ycentro+Math.round(Math.cos(angulo)*10);
		
		
		ojo.beginPath();
		
		ojo.arc(x,y,5,0,Math.PI*2,false);
		
		ojo.fill();
		
	}


window.addEventListener("load", comenzar, false);