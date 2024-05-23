document.addEventListener('DOMContentLoaded', (event) => {
    let cookieCount = 0;

    const cookie = document.getElementById('cookie');
    const cookieCountDisplay = document.getElementById('cookie-count');

    cookie.addEventListener('click', () => {
        cookieCount++;
        cookieCountDisplay.textContent = cookieCount;
    });
});