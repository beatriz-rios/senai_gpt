// Seleciona o botão e o corpo da página
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// Adiciona o evento de clique
toggleBtn.addEventListener('click', () => {
    // 1. Alterna a classe dark-mode no body
    body.classList.toggle('dark-mode');

    // 2. Troca o ícone entre lua e sol
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});