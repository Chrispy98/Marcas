function verificarEdad(){
	let edad=document.getElementsByTagName("input")[0].value;
	console.log("La edad es: " + edad);
	if(edad>=18){
		document.getElementsByTagName("p")[0].innerHTML="Puedes pasar :D";
		document.getElementsByTagName("p")[0].style.color="green";
	}
	else{
		document.getElementsByTagName("p")[0].innerHTML="NO PUEDES PASAR";
		document.getElementsByTagName("p")[0].style.color="red";
	}
	document.getElementsByTagName("p")[0].style.visibility="visible";
}