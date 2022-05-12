// JavaScript Document

	var elem_origen;

	var elem_destino;



	function comenzar(){
		
		elem_origen=document.getElementById("imagen");
		
		elem_origen.addEventListener("dragstart", comienzarrastre,false);
		
		elem_destino=document.getElementById("zonadestino");
		
		elem_destino.addEventListener("dragover", function(e){
			e.preventDefault();},false);
		
		elem_destino.addEventListener("drop",soltar,false);
		
		elem_origen.addEventListener("dragend",terminar,false);
		
		elem_destino.addEventListener("dragenter", entrada,false);
		
		elem_destino.addEventListener("dragleave",saliendo,false);
		
		}
	function comienzarrastre (e){
		
		var codigo="<img src= '" + elem_origen.getAttribute("src") + "'>";
		
		e.dataTransfer.setData("Text", codigo);
		
	}
	function soltar(e){
		
		e.preventDefault();
		
		elem_destino.innerHTML=e.dataTransfer.getData("Text");
	}

	function terminar(e){
		
		var elemento=e.target;
		
		elemento.style.visibility="hidden";
		
	}
	
	function entrada(e){
		
		e.preventDefault();
		
		elem_destino.style.background="rgba(8,252,8,.8)";
	}

	function saliendo(e){
		
		e.preventDefault();
		
		elem_destino.style.background="#FFFFFF";
	
		
	}








	window.addEventListener("load",comenzar,false);