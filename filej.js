// JavaScript Document
var zonadatos=document.getElementById("zonadatos");
function comenzar(){
	
	zonadatos=document.getElementById("zonadatos");
	
	var archivos=document.getElementById("archivos");
	
	archivos.addEventListener("change", procesar, false);
	

}

function procesar(e){
	
	var archivos=e.target.files;
	
	zonadatos.innerHTML="";
	
	var miarchivo=archivos[0];
	
	alert(miarchivo.type);
	
	if(!miarchivo.type.match(/image/)){
		
		alert("Selecciona una imagen");
		
	}else{
		
		zonadatos.innerHTML+="Nombre del archivo: " + miarchivo.name + "<br>";
		
		zonadatos.innerHTML+="Tamaño del archivo; " + miarchivo.size/1024 + "kb" + "<br>";
		
		var lector=new FileReader();
		
		lector.readAsDataURL(miarchivo);
		lector.addEventListener("load",mostrarweb,false);
	}
	
	
}

function mostrarweb(e){
	
	var resultado=e.target.result;
	
	zonadatos.innerHTML+="<img src='"+resultado+"' width='85%'>";
	
}



window.addEventListener("load",comenzar,false);