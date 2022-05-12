// JavaScript Document


function ejecuta (){
	/*for(var i=0;i<3;i++){
		
	document.getElementsByTagName("p")[i].onclick=cualfue;*/
		
	
	/*document.getElementById("importante").onclick=cualfue;*/
	
	for(var i=0;i<4;i++){
	var z=document.getElementsByClassName("importante")[i].onclick=cualfue;
	}
}
function cualfue(){
	
alert("Cuál fué?");
	
}
window.onload=ejecuta;