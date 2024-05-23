let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';

function alternarCorBorda(elemento) {
    let corAtual = elemento.style.borderColor;
    const coresAlternativas = ['red', 'blue'];

    if (corAtual === 'red') {
         elemento.style.borderColor = 'blue';
    } else {
        elemento.style.borderColor = 'red';
    }
}    

    const nomeUsuario = prompt("Por favor, digite seu nome:");
    const h1Elemento = document.createElement('h1');

    h1Elemento.textContent = nomeUsuario;
    h1Elemento.style.border = "3px solid red"; // Ajuste a
    h1Elemento.style.color = "darkblue";
    document.body.appendChild(h1Elemento);

    setInterval(() => {
        alternarCorBorda(h1Elemento);
    }, 1000);