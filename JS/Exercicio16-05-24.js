// IMC
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    if (imc < 16.9) {
        return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}
// Real pra Euro
function converterParaEuro(valorEmReal) {
    var taxaCambioEuro = 6.3; // Considerando uma taxa de câmbio fictícia
    var valorEmEuro = valorEmReal / taxaCambioEuro;
    return valorEmEuro;
}