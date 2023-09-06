document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.parentElement.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
            this.textContent = content.style.display === "block" ? "-" : "+";
        });
    });
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    // Defina o tempo mínimo em milissegundos (5 segundos = 5000 ms)
    const tempoMinimo = 5000;
    
    // Use setTimeout para atrasar a ocultação da página de carregamento
    setTimeout(() => {
        loader.style.display = 'none';
    }, tempoMinimo);
});