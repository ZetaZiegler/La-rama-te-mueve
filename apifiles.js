// JavaScript Document

function comenzar(){
	
	zonadatos=document.getElementById("zonadatos");
	
	zonaprogreso=document.getElementById("zonaprogreso");
	
	var boton=document.getElementById("boton");
	
	boton.addEventListener("click", leer, false);
	
}

function leer(){
	
	var url="Jesús bailando_360p.mp4";
	
	var solicitud= new XMLHttpRequest();
	
	solicitud.addEventListener("loadstart",comienzabarra,false);
	
	solicitud.addEventListener("progress",estadobarra,false);
	
	solicitud.addEventListener("load", mostrar,false);
	
	solicitud.open("GET",url,true);
	
	solicitud.send(null);
	
}

function comienzabarra(){
	
	zonadatos.innerHTML="<progress value='0' max='100'></progress>";
}

function estadobarra(e){
	
	var porcentaje=parseInt(e.loaded/e.total*100);
	
	var barraprogreso=zonadatos.querySelector("progress");
	
	barraprogreso.value=porcentaje;
	
	zonaprogreso.innerHTML=porcentaje + " %";
}

function mostrar(e){
	
	zonadatos.innerHTML="Archivo leído!";
	
}




window.addEventListener("load",comenzar,false);