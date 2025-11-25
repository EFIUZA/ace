// js/script.js

// Toggle menu (corrigido: removido o erro '.r(' e balanceado aspas)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar em link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Opcional: Inicializar o widget 3CX após o DOM carregar (para garantir compatibilidade)
document.addEventListener('DOMContentLoaded', function() {
    // Se o div do 3CX existir, inicialize (o embed.js cuida da maior parte)
    const chatWidget = document.getElementById('3cx-chat-widget');
    if (chatWidget && window['3cxChatInit']) {
        window['3cxChatInit']();
    }
});
