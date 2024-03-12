function redirectToLogin() {
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Login';
    loginBtn.classList.add('login-btn');
    loginBtn.addEventListener('click', redirectToLogin);

    const header = document.querySelector('header');
    header.appendChild(loginBtn);

    function positionLoginButton() {
        const headerWidth = header.offsetWidth;
        const loginBtnWidth = loginBtn.offsetWidth;
        const margin = 20;
        const rightPosition = headerWidth - loginBtnWidth - margin;
        loginBtn.style.right = `${rightPosition}px`;
    }

    positionLoginButton();
    window.addEventListener('resize', positionLoginButton); 
});
