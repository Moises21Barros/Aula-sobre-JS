let pesodousuario = Number(prompt("Escreva seu peso"))
let alturadousuario = Number(prompt("Escreva sua altura"))
let imc = pesodousuario / (alturadousuario * 2)
  if (imc >= 18.5 && imc <= 24.9){
    alert ("você esta  saudável")
  } else{
    alert("você não esta saudável")
  }