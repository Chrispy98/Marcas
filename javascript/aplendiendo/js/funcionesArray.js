
function cargarArray() {
	let num1 = [2,6,4,1,2,49,235,39,3,2,0,-1,593];
	let listaChris = ["C","H","R","I","S","T","I","A","N"];
	let listaIvan = ["I","V","A","N"];
	let yo = "Christian";
	let texto_extraido=yo.substring(1,4);
	let animales = ["delfin", "perro", "gato", "urraca"]
	console.log(num1);
	console.log("Los números ordenados son: "+burbuja(num1));
	console.log(listaChris);
	console.log("Christian ordenado es: "+burbuja(listaChris));
	console.log(listaIvan);
	console.log("Iván ordenado es: "+burbuja(listaIvan));
	console.log(texto_extraido);
	println(animales);
	let christian = {nombre:"Christian", edad:23, altura: 1.8, aficiones: ["dormir","comer","rocke"]};
	console.log(christian.aficiones);
}

function burbuja (listaNumeros) {
	for (let i=0; i<listaNumeros.length; i++){
		for (let j=0; j<listaNumeros.length-i-1; j++){
			if (listaNumeros[j]>listaNumeros[j+1]) {
				let aux=listaNumeros[j];
				listaNumeros[j]=listaNumeros[j+1];
				listaNumeros[j+1]=aux;
			}
		}
	} 
	return listaNumeros;
}

function println (lista) {
	for (let i=0; i<lista.length; i++){
		console.log(lista[i]);
	}
}

