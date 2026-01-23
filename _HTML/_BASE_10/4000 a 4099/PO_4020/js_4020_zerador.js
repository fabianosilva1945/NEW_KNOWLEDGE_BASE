// Defina o nome do HTML atual (sem extensão)
const nomeHtml = 'PO_4020'; // Altere para o nome do seu arquivo, ex: 'pagina2', 'pagina3', etc.

// Verifica se há um contador salvo no localStorage para este arquivo específico
let contador = localStorage.getItem('contador_' + nomeHtml) || 0;
document.getElementById('contador').innerText = contador;

// Incrementa o contador e salva no localStorage
contador++;
localStorage.setItem('contador_' + nomeHtml, contador);
document.getElementById('contador').innerText = contador;

// Função para resetar o contador
function resetCounter() {
    contador = 0;
    localStorage.setItem('contador_' + nomeHtml, contador);
    document.getElementById('contador').innerText = contador;
}

// Adiciona um ouvinte de evento para detectar a combinação de teclas para resetar
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'R') {
        resetCounter();
        alert("Contador resetado.");
    }
});