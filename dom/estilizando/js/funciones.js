function creaCampos() {
	//Campo
	let campo = document.getElementById('contenedor_campo');
	let inputContainer = document.createElement("input");
	inputContainer.setAttribute("onblur","escuchando();");
	campo.appendChild(inputContainer);
}

function escuchando() {
	let campo = document.getElementsByTagName("input")[0];
	let aviso = document.getElementsByTagName("div")[1];
	if (campo.value.length<4) {
		aviso.className="alert alert-danger";
		aviso.innerHTML="<b>ERROR</b> El campo debe ser de más de 4 caracteres."
	}
	else {
		aviso.className="alert alert-success";
		aviso.innerHTML="<b>CORRECTO</b> El campo cumple las condiciones."
	}
}