// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAyXntXghf4pFK77myaIx8CJvfW6mHGWKI",
    authDomain: "plataforma-do-mini-curso.firebaseapp.com",
    projectId: "plataforma-do-mini-curso",
    storageBucket: "plataforma-do-mini-curso.appspot.com",
    messagingSenderId: "424655587612",
    appId: "1:424655587612:web:851858a379c334227056e4",
    measurementId: "G-6CE0E9R3J5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referências dos elementos no HTML
const registerForm = document.getElementById('registerForm');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorModal = document.getElementById('errorModal');
const successModal = document.getElementById('successModal');
const errorMessage = document.getElementById('errorMessage');
const closeErrorModal = document.getElementById('closeErrorModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');

// Adicionando o evento de envio do formulário
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loadingIndicator.style.display = 'flex'; // Mostra o carregamento

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const idade = document.getElementById('idade').value;
    const localizacao = document.getElementById('localizacao').value;
    const telefone = document.getElementById('telefone').value;

    // Verifica os requisitos
    if (idade >= 18 && localizacao === "sim") {
        // Salva os dados no Firestore
        await salvarDados(nome, sexo, idade, localizacao, telefone);
        
        loadingIndicator.style.display = 'none'; // Esconde o carregamento
        successModal.style.display = 'flex'; // Mostra a mensagem de sucesso
        
        document.getElementById('successMessage').innerHTML = `Olá ${nome}, sua inscrição foi realizada com sucesso!`;
    } else {
        // Caso não atenda aos requisitos
        loadingIndicator.style.display = 'none';
        errorMessage.textContent = "Desculpe, você não atende aos requisitos para participar dos cursos.";
        errorModal.style.display = 'flex';
    }
});

// Função para salvar os dados no Firebase Firestore
async function salvarDados(nome, sexo, idade, localizacao, telefone) {
    const usuarioRef = doc(db, "cadastros", telefone); // Usa o telefone como ID único

    try {
        await setDoc(usuarioRef, {
            nome: nome,
            sexo: sexo,
            idade: idade,
            localizacao: localizacao,
            telefone: telefone,
            dataCadastro: new Date().toISOString() // Captura a data de inscrição
        });
        console.log("Dados salvos com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar os dados:", error);
    }
}

// Fechar modal de erro
closeErrorModal.addEventListener('click', () => {
    errorModal.style.display = 'none';
});

// Fechar modal de sucesso
closeSuccessModal.addEventListener('click', () => {
    successModal.style.display = 'none';
    window.location.href = "https://example.com"; // Aqui você pode redirecionar para uma outra página, se necessário
});
