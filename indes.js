// JavaScript Document
var bd;
var zonadatos;
var boton;
function iniciar(){
	
	zonadatos=document.getElementById("zonadatos");
	
	boton=document.getElementById("grabar");
	
	boton.addEventListener("click", agregarobjeto, false);
	
	var solicitud=indexedDB.open("mibase");
	
	solicitud.onsuccess=function(e){
		
		bd=e.target.result;
	}
	
	solicitud.onupgradeneeded=function(e){
		
		bd=e.target.result;
		
		bd.createObjectStore("gente", {keyPath: "Clave"});
	}
	
	function agregarobjeto(){
		
		var clave=document.getElementById("clave").value;
		
		var titulo=document.getElementById("texto").value;
		
		var fecha=document.getElementById("fecha").value;
		
		var transaccion=bd.transaction(["gente"], "readwrite");
		
		var almacen=transaccion.objectStore("gente");
		
		var agregar=almacen.add ({Clave: clave, Titulo: titulo, Fecha: fecha});
		agregar.addEventListener("success",mostrar,false);
		document.getElementById("clave").value="";
		document.getElementById("texto").value="";
		document.getElementById("fecha").value="";
		
	}
	
	function mostrar(){
		
		zonadatos.innerHTML="";
		
		var transaccion=bd.transaction(["gente"],"readonly");
		
		var almacen=transaccion.objectStore("gente");
		
		var cursor=almacen.openCursor();
		
		cursor.addEventListener("success", mostrardatos,false);
		
		
		
	}
	
	function mostrardatos(e){
		
		var cursor=e.target.result;
		
		if(cursor){
			
			zonadatos.innerHTML+="<div>" + cursor.value.Clave + " - " + cursor.value.Titulo + " - " + cursor.value.Fecha + "</div";
			
			cursor.continue();
		}
		
	}
	
	
}






window.addEventListener("load", iniciar, false);