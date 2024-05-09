function processFormData() {
    // Obter os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var neighborhood = document.getElementById("neighborhood").value;

    // Converter o nome para letras maiúsculas
    var upperCaseName = name.toUpperCase();

    // Exibir os dados do usuário
    alert("Nome: " + upperCaseName + "\nIdade: " + age + "\nBairro: " + neighborhood);
}
function calculateSum() {
    // Obter os valores dos campos do formulário
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // Verificar se os valores inseridos são números inteiros
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números inteiros válidos.");
        return;
    }

    // Calcular a soma dos números
    var sum = num1 + num2;

    // Exibir o resultado da soma na tela
    document.getElementById("result").innerText = "A soma de " + num1 + " e " + num2 + " é igual a: " + sum;
}