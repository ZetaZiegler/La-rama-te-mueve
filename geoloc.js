// JavaScript Document

function comenzar(){
	
	var miboton=document.getElementById("dameubicacion");
	
	miboton.addEventListener("click",obtener,false);
}

function obtener(){
	
	var parametros={enableHighAccuracy:true, timeout:10000, maximumAge:60000};
	navigator.geolocation.watchPosition(mostrar, errores, parametros);
	
}

function mostrar(posicion){
	
	var ubicacion=document.getElementById("ubicacion");
	
	/*var miubicacion="";
	
	miubicacion+="latitud: " + posicion.coords.latitude + "<br>";
	
	miubicacion+="longitud: " + posicion.coords.longitude + "<br>";
	
	miubicacion+="exactitud: " + posicion.coords.accuracy + "<br>";*/
	
	var mimapa="http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;
	
	
	ubicacion.innerHTML="<img src='" + mimapa + "'>";
	
	
}

function errores(error){
	
	//alert("Hubose un error" + error.code + " " + error.message);
	
	
	if(error.code==1){
		
		alert("Habilitá la ubicación, canuto. Quiénsó? el anonimus?");
	}
}







window.addEventListener("load",comenzar,false);