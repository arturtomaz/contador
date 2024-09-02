var numero = 0;
function aumentar() {
	if (numero >= 9) {
		document.querySelector(".mensagem").innerHTML =
			"O número não pode ser maior do que 9!";
	} else {
		document.querySelector(".mensagem").innerHTML = "";
		numero += 1;
		document.querySelector(".numero").innerHTML = numero;
	}
}

function diminuir() {
	if (numero <= -9) {
		document.querySelector(".mensagem").innerHTML =
			"O número não pode ser menor do que -9!";
	} else {
		document.querySelector(".mensagem").innerHTML = "";
		numero -= 1;
		document.querySelector(".numero").innerHTML = numero;
	}
}
