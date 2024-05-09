const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (numero) => {
  numero = parseInt(numero); // Convertendo a entrada para um número inteiro

  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }

  rl.close();
});
