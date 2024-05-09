let valor = 1000
let cupom = prompt("informe qual é o código promocional")
// DESC1 - 05%
// DESC2 - 10%
// DESC3 - 15%
// DESC4 - 20%
// DESC5 - 25%

switch (cupom.toUpperCase()) {
    case "DESC1":
        valorCupom = 0.005
        desconto = valor - (valorCupom * valor)
        alert(`Você conseguiu ${valorCupom * 100}% de desconto na sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;

    case "DESC2":
        valorCupom = 0.010
        desconto = valor - (valorCupom * valor)
        alert(`Você conseguiu ${valorCupom * 100}% de desconto na sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;
        
    case "DESC3":
        valorCupom = 0.015
        desconto = valor - (valorCupom * valor)
        alert(`Você conseguiu ${valorCupom * 100}% de desconto na sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;

    case "DESC4":
        valorCupom = 0.020
        desconto = valor - (valorCupom * valor)
        alert(`Você conseguiu ${valorCupom * 100}% de desconto na sua compra de ${valor}, o valor final ficou em {desconto}`);
        break;

    case "DESC5":
        valorCupom = 0.025
        desconto = valor - (valorCupom * valor)
        alert(`Você conseguiu ${valorCupom * 100}% de desconto na sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;

    default:
        console.log("O cupom informado não existe");
    break;
}