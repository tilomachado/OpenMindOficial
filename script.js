// Selecionar todos os carrosséis
const carousels = document.querySelectorAll('.carousel');
const prevButtons = document.querySelectorAll('#prev');
const nextButtons = document.querySelectorAll('#next');

// Função para atualizar um carrossel específico
function updateCarousel(carousel, currentIndex) {
    const width = carousel.children[0].offsetWidth + 20; // 20px de margem
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
}

// Adicionar eventos de click para todos os carrosséis
carousels.forEach((carousel, index) => {
    let currentIndex = 0;

    // Navegação do botão "próximo"
    nextButtons[index].addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
        }
        updateCarousel(carousel, currentIndex);
    });

    // Navegação do botão "anterior"
    prevButtons[index].addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel(carousel, currentIndex);
    });
});
window.onload = function() {
    const loadingOverlay = document.getElementById('loading');
    loadingOverlay.style.display = 'none';
};
document.querySelectorAll('.btn-principal').forEach(button => {
    button.addEventListener('click', function(event) {
        // Mostrar o carregamento
        const loadingOverlay = document.getElementById('loading');
        loadingOverlay.style.display = 'flex'; // Alterando para 'flex' para centralizar o spinner

        // Definir um atraso antes de redirecionar (opcional, pode ajustar o tempo)
        setTimeout(() => {
            // Redirecionar para a página
            window.location.href = this.href;
        }, 1000); // Atraso de 1 segundo antes do redirecionamento
    });
});
auth.onAuthStateChanged(async user => {
    if (user) {
        // Se o usuário estiver autenticado, verifica se o ID é o do admin
        if (user.uid === "Q0Nq7DXCxVak1H19rCmR3YtFqOQ2") {
            document.getElementById('adminButton').style.display = 'flex'; // Mostra o botão
        }
    } else {
        // Usuário não autenticado
        console.log("Usuário não autenticado");
    }
});
