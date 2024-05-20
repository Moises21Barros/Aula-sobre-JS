let jogos = [
    'Red Dead Redemption',
    'Minecraft',
    'Far Cry 3',
    'Mortal Kombat 9',
    'Batman: Arkham City',
]

jogos.forEach((jogos)=> {
    console.log(`Jogos onlines: ${jogos}`);
})

console.log(`--- --- --- --- ---`);

jogos.forEach((valor, indice, array)=> {
    console.log(`Jogos Free: ${valor}`);
    console.log(`Número em lista disponivel: ${indice}`);
    console.log(`Elementos da lista: ${array}`);
    console.log(`--- --- --- --- ---`);
})