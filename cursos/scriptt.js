document.addEventListener("DOMContentLoaded", function () {
    // Verificar se já existe uma data de expiração armazenada no localStorage
    let deadline = localStorage.getItem("offerDeadline");

    // Se não existir, definir para 30 de março de 2025
    if (!deadline) {
        deadline = new Date("2025-03-30T23:59:59").getTime();
        localStorage.setItem("offerDeadline", deadline);
    } else {
        deadline = parseInt(deadline); // Converter de string para número
    }

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = deadline - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerText = "Oferta Expirada!";
            document.getElementById("bankButton").disabled = true;
            document.getElementById("mpesaButton").disabled = true;
            localStorage.removeItem("offerDeadline"); // Remover a oferta após a expiração
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Atualizar imediatamente ao carregar
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Eventos de clique nos botões
    document.getElementById("bankButton").addEventListener("click", function () {
        alert("Redirecionando para pagamento via Banco...");
    });

    document.getElementById("mpesaButton").addEventListener("click", function () {
        alert("Redirecionando para pagamento via M-Pesa/Outras...");
    });
});
