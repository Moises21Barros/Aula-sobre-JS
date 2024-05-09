//Atividade 1



// Programa para somar duas variáveis inteiras

// Declaração de duas variáveis inteiras
let var1 = 2.1015;
let var2 = 1.0400;

// Soma das variáveis
let soma = var1 + var2;

// Exibindo o resultado da soma
console.log("A soma de", var1, "e", var2, "é igual a", soma);

// Programa para exibir o conteúdo de uma variável string

// Declaração de uma variável do tipo string
let texto = "Olá, mundo!";

// Exibindo o conteúdo da variável string
console.log("O conteúdo da variável é:", texto);

// Programa para atribuir e exibir o valor de uma variável booleana

// Declaração de uma variável do tipo booleano
let booleano = true;

// Exibindo o valor da variável booleana
console.log("O valor da variável booleana é:", booleano);

// Programa para atribuir e exibir o valor de uma variável numérica

// Declaração de uma variável do tipo numérico
let num = 3.1415;

// Exibindo o valor da variável numérica
console.log("O valor da variável numérica é:", num);



//Atividade 2



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome? ', (nome) => {
  const nomeMaiusculo = nome.toUpperCase();
  console.log(`Olá, ${nomeMaiusculo}!`);

  rl.question('Qual a sua idade? ', (idade) => {
    console.log(`Legal, você tem ${idade} anos.`);

    rl.question('Em qual bairro você mora? ', (bairro) => {
      console.log(`Entendi, você mora no bairro ${bairro}.`);

      rl.question('Digite dois números inteiros separados por espaço: ', (input) => {
        const numeros = input.split(' ').map(Number);
        
        if (numeros.length !== 2 || isNaN(numeros[0]) || isNaN(numeros[1])) {
          console.log('Por favor, forneça dois números inteiros separados por espaço.');
        } else {
          const soma = numeros[0] + numeros[1];
          console.log(`A soma dos números ${numeros[0]} e ${numeros[1]} é igual a ${soma}.`);
        }

        rl.close();
      });
    });
  });
});



//Atividade 3



let meuNome = "Seu Nome Completo";
meuNome = meuNome.replace(/ ([^ ]+)$/, " NovoSobrenome");
let resultado = `Meu nome completo atualizado é: ${meuNome}`;
console.log(resultado);



//Atividade 4



let preco = 100; // Supondo que o preço original seja 100
let desconto = 0.2; // Representa 20% de desconto
let precoFinal = preco - (preco * desconto); // Calculando o preço com desconto
console.log("O preço final com desconto é:", precoFinal);



//Atividade 5



let idade = 30; // Suponha que a idade seja 30

if (idade < 18) {
  console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
  console.log("Você é adulto.");
} else {
  console.log("Você é idoso.");
}



//Atividade 6



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é a sua idade? ', (idade) => {
  if (idade >= 18) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você ainda não pode dirigir.");
  }

  rl.close();
});



//Atividade 7



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



//Atividade 8



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua altura em metros: ', (altura) => {
  rl.question('Digite seu peso em quilogramas: ', (peso) => {
    // Convertendo a entrada para números
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // Calculando o IMC
    let imc = peso / (altura * altura);

    // Verificando se o IMC está dentro do intervalo saudável
    if (imc >= 18.5 && imc <= 24.9) {
      console.log("Seu IMC está dentro do intervalo saudável.");
    } else {
      console.log("Seu IMC não está dentro do intervalo saudável.");
    }

    rl.close();
  });
});