// Real pra Euro
function converterParaEuro() {
    var valorEmReal = parseFloat(prompt("Digite o valor em Real para converter para Euro:"));
    var taxaCambioEuro = 5.58; // Considerando uma taxa de câmbio fictícia
    var valorEmEuro = valorEmReal / taxaCambioEuro;

    alert("R$" + valorEmReal.toFixed(2) + " equivale a aproximadamente €" + valorEmEuro.toFixed(2));
}

converterParaEuro();