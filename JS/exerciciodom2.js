const classificarPeso = () => {
    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    
    let imc = peso / (altura * altura);
    
    let res = document.querySelector('#resultado');
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
    
    if (imc < 16.9) {
        res.innerHTML = "Seu IMC é: Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        res.innerHTML = "Seu IMC é: Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = "Seu IMC é: Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        res.innerHTML = "Seu IMC é: Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = "Seu IMC é: Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
        res.innerHTML = "Seu IMC é: Obesidade grau II";
    } else {
        res.innerHTML = "Seu IMC é: Obesidade grau III";
    }
}

let form = document.querySelector('#formCalculadora');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    classificarPeso();
});