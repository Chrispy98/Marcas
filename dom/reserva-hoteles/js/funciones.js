function desplegables(){
	let space = document.createElement("br");
	let lAdults = document.getElementsByTagName('select')[0].value;
	let lKids = document.getElementsByTagName('select')[1].value;
	let divAdults = document.getElementsByTagName('div')[0];
	let divKids = document.getElementsByTagName('div')[1];
	divAdults.innerHTML=" ";
	divKids.innerHTML=" ";
	for (let i=0; i<lAdults; i++){
		let adults = document.createElement("input");
		adults.setAttribute("type","text");
		kids.setAttribute("class","adult");
		divAdults.appendChild(adults);
		divAdults.appendChild(space);
	}

	for (let i=0; i<lKids; i++){
		let kids = document.createElement("input");
		kids.setAttribute("type","number");
		kids.setAttribute("class","nino");
		divKids.appendChild(kids);
		divKids.appendChild(space);
	}
}

function enviar() {
	let lAdults = document.getElementsByTagName("select")[0].value;
	let lKids = document.getElementsByTagName("select")[1].value;
	let nombres = document.getElementsByClassName("adult");
	let list = [];

	for (let i=0; i<nombres.length; i++){
		let nombre = nombres[i].value;
		list.push(nombre);
	}
	
	if (lAdults==0 && lKids!=0){
		let mensajeKids="Van 0 adultos y " + lKids + " niños de ";
		for (let i=0; i<lKids; i++){
			if (i==0) {
				mensajeKids+= document.getElementsByClassName("nino")[i].value + " años";
			}
			else if (0<i<lKids-1){
				mensajeKids+= ", " + document.getElementsByClassName("nino")[i].value + " años";
			}
			else {
				mensajeKids+= " y " + document.getElementsByClassName("nino")[i].value + " años.";
			}
		}
		alert(mensajeKids);
	}

	else if (lAdults!=0 && lKids==0){
		let mensajeAdults = "Van " + lAdults + " adultos de nombres";
		for (let i=0; i<lAdults; i++){
			let adulto = list[i];
			if (i==0){
				mensajeAdults+=" " + adulto;
			}
			else if (0<i<lAdults-1){
				mensajeAdults+=", " + adulto;
			}
			else{
				mensajeAdults+=" y " + adulto;
			}
		}
		mensajeAdults+=" y 0 niños.";
		alert(mensajeAdults);
	}

	else if (lAdults==0 && lKids==0){
		alert("Inserte al menos un adulto o un niño.")
	}

	else {
		let mensaje= "Van " + lAdults + " adultos de nombres";
		for (let i=0; i<lAdults; i++){
			let adulto = list[i];
			if (i==0){
				mensaje+=" " + adulto;
			}
			else if (0<i<lAdults-1){
				mensaje+=", " + adulto;
			}
			else{
				mensaje+=" y " + adulto;
			}
		}
		mensaje+=" y " + lKids + "niños de ";

		for (let i=0; i<lKids; i++){
			if (i==0) {
				mensaje+= document.getElementsByClassName("nino")[i].value + " años";
			}
			else if (0<i<lKids-1){
				mensaje+= ", " + document.getElementsByClassName("nino")[i].value + " años";
			}
			else {
				mensaje+= " y " + document.getElementsByClassName("nino")[i].value + " años.";
			}
		}
		alert(mensaje);
	}
}