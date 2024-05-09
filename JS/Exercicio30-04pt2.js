let nota1, nota2, nota3, nota4

nota1 = parseInt(prompt("Qual o valor da 1° note:"));
nota2 = parseInt(prompt("Qual o valor da 2° note:"));
nota3 = parseInt(prompt("Qual o valor da 3° note:"));
nota4 = parseInt(prompt("Qual o valor da 4° note:"));

let soma = nota1 + nota2 + nota3 + nota4;
let media = soma / 4;

alert(`A média das notas é: ${media}`);