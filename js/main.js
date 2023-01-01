/*botones*/
const encript=document.querySelector("#encript");
encript.addEventListener("click", mostrar); //escuchador de eventos
const desencript=document.querySelector("#desencript");
desencript.addEventListener("click", mostrarResult); //escuchador de eventos
//inputs 
const entradatxt=document.querySelector("#txt-entrada");	
const vacio=document.querySelector("#vacio");

function mostrar(){
	ocultar();
	encripta();
	copiar();
}
function encripta(){
	const reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};
	let nuevo=entradatxt.value;
	let nuevoSi=nuevo.replace(/a|e|i|o|u/g,function(matched){return reemplazos[matched];});
	//vacio.innerText=entradatxt.value;
	vacio.innerText=nuevoSi;
}
function mostrarResult(){
	ocultar();
	desencripta();
	copiar();
}
function desencripta(){
	const reemplazos = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
};
	let nuevo=entradatxt.value;
	let nuevoSi=nuevo.replace(/ai|enter|imes|ober|ufat/g,function(matched){return reemplazos[matched];});
	//vacio.innerText=entradatxt.value;
	vacio.innerText=nuevoSi;
}
function ocultar(){
	document.getElementById("imagen-result").style.visibility = "hidden";
	document.getElementById("mensaje-vacio").style.visibility = "hidden";
	document.getElementById("vacio").style.visibility = "visible";
	document.getElementById("btn-copiar").style.visibility = "visible";
}

function copiar(){
    let copiado = navigator.clipboard.writeText(vacio.innerHTML);
    return copiado; 
}

/***CAMBIAR TEMA COLOR*/
const colorMode=document.querySelector("#color-mode");
const body =document.body;
colorMode.addEventListener("click",cambiarColor);

function cambiarColor(){
	body.classList.toggle("dark-mode");
}
/**********/




