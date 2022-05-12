// JavaScript Document
var clave;
var elvalor;
var laclave;
var valor;

function comenzar(){
	
	var boton=document.getElementById("grabar");
	
	boton.addEventListener("click", itemnuevo,false);
	
}

function itemnuevo(){
	
 clave=document.getElementById("clave").value;
	
 valor=document.getElementById("valor").value;
	
	sessionStorage.setItem(clave, valor);
	
//	sessionStorage[clave]=valor;
	
	leermostrar(clave);
	
	document.getElementById("clave").value="";
	
	document.getElementById("valor").value="";
}

function leermostrar(clave){
	
	var zonadatos=document.getElementById("zonadatos");
	
	elvalor=sessionStorage.getItem(clave);
	
	//var elvalor=sessionStorage[clave];
	
	zonadatos.innerHTML="";
	
	for(i=0;i<sessionStorage.length;i++){
		
		laclave=sessionStorage.key(i);
		
		elvalor=sessionStorage.getItem(clave);
		
		
		
	}
	
	zonadatos.innerHTML="<div>Clave: " + clave + "--" + "Valor: " + valor + "</div>";
	
	
}





window.addEventListener("load", comenzar, false);