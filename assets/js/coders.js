var coders=[{nombre:"Meche" , apellido:"Zubieta" , promocion:"1er promocion" , estado:"trabajando" },
            {nombre:"Arabela" , apellido:"Rojas" , promocion:"2da promocion" , estado:"trabajando" },
            {nombre:"Maria" , apellido:"Rosan" , promocion:"2da promocion", estado:"trabajando" },
            {nombre: "Guadalupe" , apellido:"Racio" , promocion:"3ra promocion" , estado:"trabajando" },
            {nombre:"Sara" , apellido:"Casa" , promocion: "3ra promocion", estado:"trabajando" },
            {nombre:"Daniella" , apellido:"Durand" , promocion:"5ta promocion" , estado:"trabajando" },
            {nombre:"Michell" , apellido:"Seguli" , promocion:"5ta promocion" , estado:"trabajando" },
            {nombre:"Dana" , apellido:"Navarro" , promocion: "5ta promocion", estado:"trabajando" }];
var resultado="";
var divCoders=document.getElementById("coders");
coders.forEach(function (elemento){
  var div=document.createElement("div");
  div.setAttribute("class","div-coder");
for(var x in elemento){
  console.log("entro a for in");
  var p = document.createElement("p");
  p.innerHTML= x +":"+ elemento[x]+"<br>";
  div.appendChild(p);
}
divCoders.appendChild(div);
});
