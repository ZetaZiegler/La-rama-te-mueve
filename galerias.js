// JavaScript Document
var elemdestino;

function comenzar(){
	
	var imagenes=document.querySelectorAll("#cajadeimagenes img");
	
	for (var i=0; i<imagenes.length; i++){
		
		imagenes[i].addEventListener("dragstart",comienzarrastre, false);
		
		if(i!=1){
			imagenes[i].addEventListener("dragend",terminarrastre, false);
		}
	}
	elemdestino=document.getElementById("zonadestino");
	
	elemdestino.addEventListener("dragenter",entrar,false);
	
	elemdestino.addEventListener("dragleave",salir,false);
	elemdestino.addEventListener("dragover",function (e){ e.preventDefault();},false);
	
	elemdestino.addEventListener("drop",soltar,false);
}

function comienzarrastre(e){
	
	var elemento=e.target;
	
	e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}

function soltar(e){
	
	e.preventDefault();
	
	var id=e.dataTransfer.getData("Text");
	
	if(id!="imagen 2"){
	
	var src=document.getElementById(id).src;
	
	elemdestino.innerHTML="<img src='" + src + "'>";
	} else{
		
		elemdestino.innerHTML="la imagen no es admitida";
		
		elemdestino.style.background="#fa0d29";
	}
}

function entrar(e){
	
	e.preventDefault();
	
	var id=e.dataTransfer.getData("Text");
	
	if(id!="imagen 2"){
	elemdestino.style.background="rgba(8,252,25,.8)";
	}else{ 
		elemdestino.style.background="#fa0d29"; 
	}
}

function salir (e){
	
	e.preventDefault();
	
	elemdestino.style.background="#FFFFFF";
}

function terminarrastre(e){
	
	var elemento=e.target;
	
	elemento.style.visibility="hidden";
	
}









window.addEventListener("load",comenzar,false);