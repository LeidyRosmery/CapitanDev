var sprint1=document.getElementById("sprint1");
var sprint2=document.getElementById("sprint2");
var evaluacion1=document.getElementById("evaluacion1");
var evaluacion2=document.getElementById("evaluacion2");

var mostarOcultar = function() {
	sprint1.style.display = "block";
	evaluacion1.style.display = "block";
	sprint2.style.display = "none";
	evaluacion2.style.display = "none";
}
var mostarOcultar2 = function() {
	sprint1.style.display = "none";
	evaluacion1.style.display = "none";
	sprint2.style.display = "block";
	evaluacion2.style.display = "block";
}
