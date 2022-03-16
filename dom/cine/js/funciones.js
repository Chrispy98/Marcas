function titleLengthException() {
	let titleLength = document.getElementById('title').value.length;
	if (titleLength<4){
		alert("El título ha de contener más de 3 caracteres");
	}
}

function genres(){
	let genre = document.getElementById('genre');
	let genres = ["Fantastico","Historico","Documental"];
	for (let i=0; i<genres.length; i++){
		let genero = document.createElement("option");
		genero.setAttribute("value",genres[i]);
		genre.appendChild(genero);
		document.getElementsByTagName('option')[i].innerHTML=genres[i];
	}
}

function validar() {
	let title = document.getElementById('title').value;
	let genre = document.getElementById('genre').value; 
	if (title.length<4){
		alert("El título ha de contener más de 3 caracteres");
	}
	else {
		alert("Se va a registrar la película con título " + title + " y de género " + genre);
	}
}