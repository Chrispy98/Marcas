function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="verde")
		{document.getElementById("parrafo_lorem").className="rojo";
		document.getElementById("parrafo_lorem").innerHTML="ROJO"
}
	else
		{document.getElementById("parrafo_lorem").className="verde";
		document.getElementById("parrafo_lorem").innerHTML="VERDE"}
}