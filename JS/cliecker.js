document.addEventListener('DOMContentLoaded', (event) => {
    let cookieCount = 0;

    const cookie = document.getElementById('cookie');
    const cookieCountDisplay = document.getElementById('cookie-count');
    const frasesDiv = document.getElementById('frases');

    cookie.addEventListener('click', () => {
        cookieCount++;
        cookieCountDisplay.textContent = cookieCount;

        // Verifica se o número de cliques é múltiplo de 50
        if (cookieCount % 50 === 0) {
            const frase = document.createElement("p");
            frase.textContent = "Parabéns! Continue assim!";
            frasesDiv.appendChild(frase);
        }
    });
});