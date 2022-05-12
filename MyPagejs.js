// JavaScript Document
var modo;
var budy;
var dia1;
var dia2;
var lista;
var contacto;
var mail;
function comenzar(){
	
	modo=document.getElementById("modo");
	
	budy=document.getElementById("budy");
	
	dia1=document.getElementById("dia");
	
	dia2=document.getElementById("dia2");
	
	lista=document.getElementById("ulist");
	
	contacto=document.getElementById("contacto");
	
	mail=document.getElementById("mailto");
	
	modo.addEventListener("click", cambiamodo,false);
	
	lista.addEventListener("mouseover",transcripcion,false);
	
	lista.addEventListener("mouseout",transcripcion2,false);
}

function cambiamodo(){
	if (modo.innerHTML=="Modo Nocturno"){
	modo.innerHTML="Modo Diurno"; modo.style.backgroundColor="#8B5A38";
	budy.style.backgroundColor="#312E50";
	contacto.style.backgroundColor="#121221";
	mail.style.backgroundColor="#121221";
	dia1.src="noche.png";
	dia2.src="noche2.png";
}else{
	modo.innerHTML="Modo Nocturno"; modo.style.backgroundColor="#312E50";
	budy.style.backgroundColor="#8B5A38";
	contacto.style.backgroundColor="#2C2627";
	mail.style.backgroundColor="#2C2627";
	dia1.src="dia.png";
	dia2.src="dia2.png";
}
	setInterval(1000);
}

function transcripcion(e){
	
	e.target.style.fontFamily="Humanst";
}
function transcripcion2(e){
	
	e.target.style.fontFamily="Egypt";
}













window.addEventListener("load",comenzar,false);