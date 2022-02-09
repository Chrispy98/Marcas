function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="mostrado")
		{document.getElementById("parrafo_lorem").className="oculto";}
	else
		{document.getElementById("parrafo_lorem").className="mostrado";}
	
}