// Função para redirecionar para a página de login
function redirectToLogin() {
    window.location.href = 'login.html';
}

// Adiciona o evento de clique ao botão de login
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Login';
    loginBtn.classList.add('login-btn');
    loginBtn.addEventListener('click', redirectToLogin);

    const header = document.querySelector('header');
    header.appendChild(loginBtn);

    // Posiciona o botão de login à direita do cabeçalho
    function positionLoginButton() {
        const headerWidth = header.offsetWidth;
        const loginBtnWidth = loginBtn.offsetWidth;
        const margin = 20;
        const rightPosition = headerWidth - loginBtnWidth - margin;
        loginBtn.style.right = `${rightPosition}px`;
    }

    // Chama a função de posicionamento quando a página é carregada e quando a janela é redimensionada
    positionLoginButton(); // Chamada inicial para posicionar o botão
    window.addEventListener('resize', positionLoginButton); // Re-posiciona quando a janela é redimensionada
});
