const sla = "TFUfuyguigbuigiG"
console.log(sla.charAt(2));
console.log(sla[0]);
console.log(sla.length);
console.log(sla.toLowerCase());
console.log(sla.toUpperCase());

let sla2 = "Gato"

console.log(sla2.substring(1, 3));

let sla3 = "as do elas"
let sla3Cortada = sla3.split(" ")
console.log(sla3Cortada);
console.log(sla3Cortada[1]);

let sla4 = "Cachorros sao mais gentis que gatos"
let sla4Cortada = sla4.split(" ")
let sla5 = sla4.replace("Cachorros sao mais gentis que", "Eu sou mais gentil do que")
console.log(sla5);

let text = "sla 1 2 3 4"
console.log(text.trim())