const button = document.getElementById('login-button');
const targetPage = 'main.html';
const passwordInput = document.getElementById('password');
const LoginInput = document.getElementById('username');
const toggleButton = document.getElementById('togglePassword');
const errorMessage = document.getElementById('error-message');


button.addEventListener('click', function() {

    const usernameValue = LoginInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    if (usernameValue !== '' && passwordValue !== '') {
        errorMessage.textContent = '';
        errorMessage.classList.remove('show-error');
        window.location.href = targetPage;   
    }
    else {
            errorMessage.textContent = 'Логин и пароль являются обязательными полями.';
            errorMessage.classList.add('show-error');
    }
});


if (passwordInput && toggleButton) {
    toggleButton.addEventListener('click', function() {
        
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        // Устанавливаем новый тип
        passwordInput.setAttribute('type', type);
        
        // Опционально: Меняем иконку/текст кнопки
        if (type === 'text') {
            toggleButton.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            toggleButton.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }
    });
}