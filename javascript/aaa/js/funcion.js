function cambioColor() {
	let first=document.getElementsByTagName('input')[0];
	let second=document.getElementsByTagName('input')[1];
	let cont = 0;
	for (let i=0; i<second.value.length; i++){
		if (second.value[i]=="@") {
			cont++;
		}
	}
	if (cont==0) {
		alert("Está mal");
		first.style.backgroundColor="red";
		second.style.backgroundColor="red";
	}
	else {
		alert("Hola "+first.value+" te contactare por el email "+second.value);
		first.style.backgroundColor="green";
		second.style.backgroundColor="green";
	}
}