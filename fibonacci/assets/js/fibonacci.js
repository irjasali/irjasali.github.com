/*Función que nos permite crear una serie de Fibonacci a partir de un número dado.
Autor: Irving J. S . Linares - Developer - Full-Stack */

const fibonacci = () =>{
	var x = 0;
	var valor = document.getElementById('num').value;
	var arreglo = [];
	valor = parseInt(valor);    
	
	if (valor == 0) {
		arreglo.push(0);
		alert("El valor debe de ser diferente de Cero")
	} 
	else if (( valor == 1) || ( valor >= 2)) {
		arreglo.push(0);
		arreglo.push(1);
	}
	
	 for (x=2; x<valor+1; x++) {
		 arreglo.push(arreglo[x-1] + arreglo[x-2]);
	 }

	document.getElementById("resultado").innerHTML +=" "+arreglo;
}

const limpiar= () => {
	document.getElementById("num").value="XXX";
	document.getElementById("resultado").innerHTML ="La serie Fibonacci es:";
}
