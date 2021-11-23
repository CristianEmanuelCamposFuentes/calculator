/* Este archivo comienza su nombre con mayuscula porque 
porque es una clase y por convencion comienzan de esta manera */

class Calculadora {
	sumar(num1, num2) {
		return num1 + num2;
	}

	restar(num1, num2) {
		return num1 - num2;
	}

	multiplicar(num1, num2) {
		return num1 * num2;
	}

	dividir(num1, num2) {
		if (num2 === 0) {
			return "Error";
		} else {
			return num1 / num2;
		}
	}
}
