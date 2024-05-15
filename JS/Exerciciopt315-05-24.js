// Exercício 1:
let números = [1, 2, 3, 4, 5];

let soma = números.reduce((total, num) => total + num, 0);
console.log("A soma de todos os elementos do array é:", soma);

let númeroAtual = 2;
while (númeroAtual <= 10) {
    console.log(númeroAtual);
    númeroAtual += 2;
}
console.log('--- --- --- ---');
// Exercício 2:
let números1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let númerosPares = [];

for (let número of números1) {
    if (número % 2 === 0) {
        númerosPares.push(número);
    }
}

console.log("Array com números pares:", númerosPares);

let idade = 25; // Exemplo de idade

console.log("Idade inserida:", idade);

console.log('--- --- --- ---');
// Exercício 3:
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

let informaçõesPessoa = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;
console.log(informaçõesPessoa);
console.log('--- --- --- ---');
// Exercício 4:
let sequencia = [0, 1];
let termos = 10; // Altere aqui para o número desejado de termos

for (let i = 2; i < termos; i++) {
    let próximoTermo = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(próximoTermo);
}

console.log("Sequência de Fibonacci até", termos, "termos:", sequencia.join(', '));
console.log('--- --- --- ---');
// Exercício 5:
let pessoas = {
    nome: "Maria",
    idade: 28,
    cidade: "Rio de Janeiro"
};

pessoas.idade = 30;

console.log(pessoas);
console.log('--- --- --- ---');