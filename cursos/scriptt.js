// Contador regressivo para a oferta
const countdownElement = document.getElementById('countdown');
let daysLeft = 10;

const updateCountdown = () => {
    countdownElement.textContent = `${daysLeft} dias`;
    daysLeft--;

    if (daysLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Oferta encerrada!";
        document.getElementById('bankButton').disabled = true;
        document.getElementById('mpesaButton').disabled = true;
    }
};

const countdownInterval = setInterval(updateCountdown, 86400000); // Atualiza a cada 24 horas

// Exemplo de interação nos botões de pagamento
document.getElementById('bankButton').addEventListener('click', function() {
    alert('Redirecionando para pagamento via Banco...');
});

document.getElementById('mpesaButton').addEventListener('click', function() {
    alert('Redirecionando para pagamento via M-Pesa/Outras...');
});