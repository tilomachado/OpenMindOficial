let viewCount = 0;
const viewCountElement = document.getElementById('viewCount');
const popupsContainer = document.getElementById('popups');

// Simulador de visualizações e pop-ups
setInterval(() => {
    viewCount++;
    viewCountElement.textContent = viewCount;

    // Simulando a exibição de nomes de inscrições
    const names = [
        ""
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    showPopup(randomName);
}, 10000); // Cada 10 segundos

function showPopup(name) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = `${name} se inscreveu!`;
    document.body.appendChild(popup);
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
        document.body.removeChild(popup);
    }, 3000); // Mostra o pop-up por 3 segundos
}

// Exibir elementos ocultos após 70 segundos
setTimeout(() => {
    document.querySelector('.intro').classList.remove('hidden');
    document.querySelectorAll('.kelcia-img, .features, .cta').forEach(el => el.classList.remove('hidden'));
}, 70000);

// Ocultar vídeo e barra de progresso após 90 segundos
setTimeout(() => {
    document.querySelector('.video-vsl iframe').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
}, 90000);
